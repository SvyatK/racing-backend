import {Injectable} from '@nestjs/common';
import {GamingServerMainService} from './gaming-server-main.service';
import PlayerModel from '../models/player.model';
import {UserDataDTO} from '../../app/dto/responses/user-data.dto';
import PlayerDataDTO from '../dto/player-data.dto';
import GamingWorkerEnvironment from '../gaming-worker-environment';
import StepDataDto from '../dto/step-data.dto';
import LobbyDataDTO from '../dto/lobby-data.dto';
import {CarDataDTO} from '../../app/dto/responses/car-data.dto';
import {GameState} from '../../app/database/datatypes/game-state.enum';

@Injectable()
export class GameplayService {

    private players: PlayerModel[] = [];

    // TODO get from DAE
    private startCoordinates: { x: number, y: number, rot: number }[] = [ {
        x: 99.649,
        y: -20.993,
        rot: 1.48
    }, {
        x: 103.86,
        y: -21.37,
        rot: 1.48
    }, {
        x: 96.247,
        y: -20.621,
        rot: 1.48
    }, {
        x: 107.018,
        y: -21.643,
        rot: 1.48
    }
    ];

    public lobbyData: LobbyDataDTO = new LobbyDataDTO();

    constructor(private readonly gamingServerMainService: GamingServerMainService) {
        this.lobbyData.lobbyId = GamingWorkerEnvironment.LOBBY_ID;
        this.lobbyData.map = 'nowhere';
        this.lobbyData.slots = Array<PlayerDataDTO>(GamingWorkerEnvironment.PLAYERS_COUNT)
            .fill(null);
    }

    async clientConnected(io: SocketIO.Server, socket: SocketIO.Socket): Promise<void> {
        if ( this.players.length === GamingWorkerEnvironment.PLAYERS_COUNT ) {
            socket.disconnect(true);
        }
        let user: UserDataDTO;
        try {
            user = UserDataDTO.fromOwnUserDataDTO(socket.client.request.session.user);
        } catch (err) {
            socket.disconnect(true);
        }
        this.players.push(new PlayerModel(socket, user, null));
        if (user.id === GamingWorkerEnvironment.OWNER_ID) {
            this.gamingServerMainService.onOwnerConnected();
        }
        if ( this.players.length === GamingWorkerEnvironment.PLAYERS_COUNT ) {
            this.gamingServerMainService.reportLobbyFull();
        }
        console.log(`Client '${user.login}' connected via socket connection ${socket.client.id}`);
        socket.emit('lobbyDataUpdate', this.lobbyData);
    }

    async clientDisconnected(io: SocketIO.Server, socket: SocketIO.Socket): Promise<void> {
        const leaver: PlayerModel = this.getPlayerBySocket(socket);
        console.log(`Client '${leaver.userModel.login}' disconnected (socket connection ${socket.client.id})`);
        this.players.splice(this.players.indexOf(leaver), 1);
        if ( this.players.length === 0 ) {
            this.gamingServerMainService.reportRaceCancelled();
        }
        if ( this.players.length === 1 && this.gamingServerMainService.currentState === GameState.Playing ) {
            console.log(`${this.players[ 0 ].connection.client.id} finished (no users left)`);
            io.sockets.emit('raceFinished', this.players[ 0 ].data.item.id);
            this.gamingServerMainService.reportGameFinished();
        }
    }

    async takeSlot(io: SocketIO.Server, socket: SocketIO.Socket, slotIndex: number): Promise<boolean> {
        const playerModel: PlayerModel = this.getPlayerBySocket(socket);
        const currentPlayerSlot: number = this.getPlayerSlot(playerModel);
        if (currentPlayerSlot === slotIndex) {
            return true;
        }
        let playerData: PlayerDataDTO;
        if (currentPlayerSlot > -1) {
            playerData = this.lobbyData.slots[currentPlayerSlot];
            this.lobbyData.slots[currentPlayerSlot] = null;
        } else {
            playerData = PlayerDataDTO.fromPlayerModel(playerModel);
        }
        this.lobbyData.slots[slotIndex] = playerData;
        this.sendUpdates(io);
        return true;
    }

    async selectCar(io: SocketIO.Server, socket: SocketIO.Socket, carData: CarDataDTO): Promise<boolean> {
        const playerModel: PlayerModel = this.getPlayerBySocket(socket);
        const currentPlayerSlot: number = this.getPlayerSlot(playerModel);
        this.lobbyData.slots[currentPlayerSlot].car = carData;
        // TODO stopped dev here
        this.sendUpdates(io);
        return true;
    }

    // TODO data type
    async playerReadyToStart(io: SocketIO.Server, socket: SocketIO.Socket): Promise<void> {
        console.log(`${socket.id} ready to start`);
        const positionIndex: number = this.countReadyToStartPlayers() % this.startCoordinates.length;
        const player: PlayerModel = this.getPlayerBySocket(socket);
        player.data = {
            item: {
                id: this.getPlayerSlot(player),
                trajectory: null,
                finalCarProperties: {
                    position: {
                        x: this.startCoordinates[ positionIndex ].x,
                        y: this.startCoordinates[ positionIndex ].y
                    },
                    rotation: this.startCoordinates[ positionIndex ].rot,
                    speed: 0
                },
                acceleration: 0
            },
            finished: false,
            ready: false
        };
        if ( this.countReadyToStartPlayers() === GamingWorkerEnvironment.PLAYERS_COUNT ) {
            this.gamingServerMainService.reportGameStarted();
            this.update(io);
        }
    }

    async nextStep(io: SocketIO.Server, socket: SocketIO.Socket, data: StepDataDto): Promise<void> {
        const player: PlayerModel = this.getPlayerBySocket(socket);
        if (player.data.item.id !== data.id) {
            throw new Error('player.data.item.id !== data.id');
        }
        player.data.item = data;
        player.data.ready = true;
        //get ready items
        let clientsReady = this.countReadyPlayers();
        if ( clientsReady >= GamingWorkerEnvironment.PLAYERS_COUNT ) {
            //setting ready false
            for (let k = 0; k < this.players.length; k++) {
                this.players[ k ].data.ready = false;
            }
            this.update(io);
        }
    }

    async playerFinished(io: SocketIO.Server, socket: SocketIO.Socket, data: any): Promise<void> {
        console.log(`${socket.id} finished`);
        io.sockets.emit('raceFinished', data.id);
        this.gamingServerMainService.reportGameFinished();
    }

    // TODO types
    private update(io: SocketIO.Server): void {
        const itemsToSend: StepDataDto[] = this.players
                                               .map((player: PlayerModel): StepDataDto => player.data.item)
                                               .filter(item => !!item);
        if ( itemsToSend.length >= GamingWorkerEnvironment.PLAYERS_COUNT ) {
            io.sockets.emit('stepComplete', itemsToSend);
        }
    }

    private sendUpdates(io: SocketIO.Server): void {
        io.sockets.emit('lobbyDataUpdate', this.lobbyData);
    }

    private getPlayerBySocket(socket: SocketIO.Socket): PlayerModel {
        return this.players.find((player: PlayerModel): boolean => {
            return (player.connection.client.id === socket.client.id);
        });
    }

    private getPlayerSlot(player: PlayerModel): number {
        return this.lobbyData.slots.findIndex((inSlotPlayer: PlayerDataDTO): boolean => {
            return inSlotPlayer && inSlotPlayer.playerId === player.connection.client.id;
        });
    }

    private countReadyToStartPlayers(): number {
        return this.players.filter(
            (player: PlayerModel): boolean => (!!player.data && Object.keys(player.data).length > 0)
        ).length;
    }

    // TODO rename. means how many players made a move
    private countReadyPlayers(): number {
        return this.players.filter((player: PlayerModel): boolean => (!!player.data && player.data.ready)).length;
    }
}