import { Component } from '@nestjs/common';
import { GamingServerMainService } from './gaming-server-main.service';
import PlayerModel from '../models/player.model';
import { GameState } from '../../app/business/interfaces/enum/game-state.enum';
import { UserDataDTO } from '../../app/dto/responses/user-data.dto';
import PlayerDataDTO from '../dto/player-data.dto';
import GamingWorkerEnvironment from '../gaming-worker-environment';

@Component()
export class GameplayService {

    public static PLAYERS_COUNT: number = 2;

    private players: PlayerModel[] = [];

    // TODO get from DAE
    private startCoordinates: { x: number, y: number, rot: number }[] = [ {
        x: 97.94302,
        y: -20.93091,
        rot: 1.49
    }, {
        x: 101.3607,
        y: -21.11663,
        rot: 1.49
    }, {
        x: 104.4797,
        y: -21.27523,
        rot: 1.49
    }, {
        x: 107.6465,
        y: -21.39263,
        rot: 1.49
    }
    ];

    constructor(private readonly gamingServerMainService: GamingServerMainService) {
    }

    async clientConnected(io: SocketIO.Server, socket: SocketIO.Socket): Promise<void> {
        if ( this.players.length === GameplayService.PLAYERS_COUNT ) {
            socket.disconnect(true);
        }
        const user: UserDataDTO = UserDataDTO.fromOwnUserDataDTO(socket.client.request.session.user);
        this.players.push(new PlayerModel(socket, user, {}));
        if ( user._id === GamingWorkerEnvironment.OWNER_ID ) {
            this.gamingServerMainService.onOwnerConnected();
        }
        if ( this.players.length === GameplayService.PLAYERS_COUNT ) {
            this.gamingServerMainService.reportLobbyFull();
        }
        console.log(`Client '${user.login}' connected via socket connection ${socket.client.id}`);
        socket.emit(
            'addedToLobby',
            this.players.map(
                (player: PlayerModel): PlayerDataDTO => PlayerDataDTO.fromPlayerModel(player)
            )
        );
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

    // TODO data type
    async playerReadyToStart(io: SocketIO.Server, socket: SocketIO.Socket, data: any): Promise<void> {
        console.log(`${socket.id} ready to start`);
        const positionIndex: number = this.countReadyToStartPlayers();
        const container = {
            item: {
                id: data.id,
                x: this.startCoordinates[ positionIndex ].x,
                y: this.startCoordinates[ positionIndex ].y,
                rotation: this.startCoordinates[ positionIndex ].rot,
                speed: 0,
                name: data.name
            },
            ready: false,
            finished: false
        };
        this.getPlayerBySocket(socket).data = container;
        if ( this.countReadyToStartPlayers() === GameplayService.PLAYERS_COUNT ) {
            this.gamingServerMainService.reportGameStarted();
            this.update(io);
        }
    }

    async nextStep(io: SocketIO.Server, socket: SocketIO.Socket, data: any): Promise<void> {
        let currentContainer;
        //replace item data
        for (let i = 0; i < this.players.length; i++) {
            let container = this.players[ i ].data;
            if ( data.id == container.item.id ) {
                this.players[ i ].data.item = data;
                this.players[ i ].data.ready = true;
                currentContainer = container;
            }
        }
        //get ready items
        let clientsReady = this.countReadyPlayers();
        if ( clientsReady >= GameplayService.PLAYERS_COUNT ) {
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
        const itemsToSend = this.players
                                .map((player: PlayerModel): any => player.data.item)
                                .filter(item => !!item);
        if ( itemsToSend.length >= GameplayService.PLAYERS_COUNT ) {
            io.sockets.emit('stepComplete', itemsToSend);
        }
    }

    private getPlayerBySocket(socket: SocketIO.Socket): PlayerModel {
        return this.players.find((player: PlayerModel): boolean => {
            return (player.connection.client.id === socket.client.id);
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