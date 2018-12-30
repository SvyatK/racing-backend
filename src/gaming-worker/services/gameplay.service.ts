import {Injectable} from '@nestjs/common';
import {GamingServerMainService} from './gaming-server-main.service';
import PlayerModel from '../models/player.model';
import {UserDataDTO} from '../../app/dto/responses/user-data.dto';
import GamingWorkerEnvironment from '../gaming-worker-environment';
import {CarDataDTO} from '../../app/dto/responses/car-data.dto';
import {GameState} from '../../app/database/datatypes/game-state.enum';
import LobbySettingsModel from '../models/lobby-settings.model';
import CarPositioningModel from '../models/car-positioning.model';
import StepDataModel from '../models/step-data.model';
import LobbyRuntimeDataModel from '../models/lobby-runtime-data.model';

@Injectable()
export class GameplayService {

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

    public lobbyData: LobbyRuntimeDataModel;

    constructor(private readonly gamingServerMainService: GamingServerMainService) {
        this.lobbyData = new LobbyRuntimeDataModel(
            GamingWorkerEnvironment.LOBBY_ID,
            new LobbySettingsModel(
                'default',
                GamingWorkerEnvironment.PLAYERS_COUNT,
            ),
        );
    }

    async clientConnected(io: SocketIO.Server, socket: SocketIO.Socket): Promise<void> {
        if (this.lobbyData.players.length >= this.lobbyData.settings.slotsCount) {
            socket.disconnect(true);
        }
        let user: UserDataDTO;
        try {
            user = UserDataDTO.fromOwnUserDataDTO(socket.client.request.session.user);
        } catch (err) {
            socket.disconnect(true);
        }
        this.lobbyData.players.push(
            new PlayerModel(
                socket.client.id,
                user,
                user.id === GamingWorkerEnvironment.OWNER_ID,
            )
        );
        if (user.id === GamingWorkerEnvironment.OWNER_ID) {
            this.gamingServerMainService.onOwnerConnected();
            this.lobbyData.state = GameState.WaitingForPlayers;
        }
        if (this.lobbyData.isLobbyFull) {
            this.gamingServerMainService.reportLobbyFull();
            this.lobbyData.state = GameState.LobbyFull;
        }
        console.log(`Client '${user.login}' connected via socket connection ${socket.client.id}`);
        socket.emit('lobbyDataUpdate', this.lobbyData);
    }

    async clientDisconnected(io: SocketIO.Server, socket: SocketIO.Socket): Promise<void> {
        const leaver: PlayerModel = this.lobbyData.getPlayerBySocket(socket);
        console.log(`Client '${leaver.userModel.login}' disconnected (socket connection ${socket.client.id})`);
        this.lobbyData.players.splice(this.lobbyData.players.indexOf(leaver), 1);
        if (this.lobbyData.players.length === 0) {
            this.gamingServerMainService.reportRaceCancelled();
            this.lobbyData.state = GameState.Cancelled;
        }
        if (this.lobbyData.players.length === 1 && this.lobbyData.state === GameState.Playing) {
            console.log(`${this.lobbyData.players[0].connectionId} finished (no users left)`);
            io.sockets.emit('raceFinished', this.lobbyData.players[0].slot);
            this.gamingServerMainService.reportGameFinished();
            this.lobbyData.state = GameState.Finished;
        }
    }

    async takeSlot(io: SocketIO.Server, socket: SocketIO.Socket, slotIndex: number): Promise<boolean> {
        const playerModel: PlayerModel = this.lobbyData.getPlayerBySocket(socket);
        if (playerModel.slot === slotIndex) {
            return true;
        }
        const slotIsBusy: boolean = !!this.lobbyData.getPlayerBySlot(slotIndex);
        if (slotIsBusy) {
            return false;
        }
        playerModel.slot = slotIndex;
        this.sendLobbyDataUpdates(io);
        this.startGameIfReady(io)
            .then();
        return true;
    }

    async selectCar(io: SocketIO.Server, socket: SocketIO.Socket, carData: CarDataDTO): Promise<boolean> {
        const playerModel: PlayerModel = this.lobbyData.getPlayerBySocket(socket);
        playerModel.car = carData;
        this.sendLobbyDataUpdates(io);
        this.startGameIfReady(io)
            .then();
        return true;
    }

    async loadingStateChanged(io: SocketIO.Server, socket: SocketIO.Socket, isLoading: boolean): Promise<void> {
        const player: PlayerModel = this.lobbyData.getPlayerBySocket(socket);
        player.isLoading = isLoading;
        this.sendLobbyDataUpdates(io);
        return this.startGameIfReady(io);
    }

    async playerReadyToStart(io: SocketIO.Server, socket: SocketIO.Socket): Promise<void> {
        const player: PlayerModel = this.lobbyData.getPlayerBySocket(socket);
        player.isReadyToStart = true;
        this.sendLobbyDataUpdates(io);
        return this.startGameIfReady(io);
    }

    async nextStep(io: SocketIO.Server, socket: SocketIO.Socket, step: StepDataModel): Promise<void> {
        const player: PlayerModel = this.lobbyData.getPlayerBySocket(socket);
        player.currentStep = step;
        if (this.lobbyData.isReadyToNextMove) {
            this.finishCurrentStep(io);
        }
    }

    async playerFinished(io: SocketIO.Server, socket: SocketIO.Socket, data: any): Promise<void> {
        console.log(`${socket.id} finished`);
        io.sockets.emit('raceFinished', this.lobbyData.getPlayerBySocket(socket).slot);
        this.gamingServerMainService.reportGameFinished();
        this.lobbyData.state = GameState.Finished;
    }

    private async startGameIfReady(io: SocketIO.Server): Promise<void> {
        if (!this.lobbyData.isGameReadyToStart) {
            return;
        }
        // setting start positions
        for (const player of this.lobbyData.players) {
            const positionIndex: number = player.slot % this.startCoordinates.length;
            player.currentStep = new StepDataModel(
                new CarPositioningModel(
                    {
                        x: this.startCoordinates[positionIndex].x,
                        y: this.startCoordinates[positionIndex].y
                    },
                    this.startCoordinates[positionIndex].rot,
                    0,
                )
            );
        }
        // actual game start logic
        this.gamingServerMainService.reportGameStarted();
        this.lobbyData.state = GameState.Playing;
        this.finishCurrentStep(io);
    }

    private finishCurrentStep(io: SocketIO.Server): void {
        const itemsToSend: {slot: number, step: StepDataModel}[] = this.lobbyData.players
                                                                       .map((player: PlayerModel): {slot: number, step: StepDataModel} => {
                                                                           return {
                                                                               slot: player.slot,
                                                                               step: player.currentStep,
                                                                           };
                                                                       });
        for (const player of this.lobbyData.players) {
            player.currentStep = null;
        }
        io.sockets.emit('stepComplete', itemsToSend);
    }

    private sendLobbyDataUpdates(io: SocketIO.Server): void {
        io.sockets.emit('lobbyDataUpdate', this.lobbyData);
    }
}