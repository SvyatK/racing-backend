import LobbySettingsModel from '../models/lobby-settings.model';
import PlayerModel from './player.model';
import {Socket} from 'socket.io';
import {GameState} from '../../app/database/datatypes/game-state.enum';

export default class LobbyRuntimeDataModel {

    constructor(
        public lobbyId: number,
        public settings: LobbySettingsModel = new LobbySettingsModel(),
        public players: PlayerModel[] = [],
        public state: GameState = GameState.Initializing,
    ) {
    }

    public get isLobbyFull(): boolean {
        return this.players.length >= this.settings.slotsCount;
    }

    public get isReadyToNextMove(): boolean {
        const pendingPlayers: PlayerModel[] = this.players.filter(
            (player: PlayerModel): boolean => (!player.currentStep)
        );
        return pendingPlayers.length === 0;
    }

    public get isGameReadyToStart(): boolean {
        if (this.state !== GameState.LobbyFull) {
            return false;
        }
        const pendingPlayers: PlayerModel[] = this.players.filter(
            player => (player.isLoading || !player.isReadyToStart || !player.car || player.slot === -1)
        );
        return pendingPlayers.length === 0;
    }

    public getPlayerBySocket(socket: Socket): PlayerModel {
        return this.players.find((player: PlayerModel): boolean => {
            return (player.connectionId === socket.client.id);
        });
    }

    public getPlayerBySlot(slot: number): PlayerModel {
        if (slot === -1) {
            return null;
        }
        return this.players.find((player: PlayerModel): boolean => {
            return (player.slot === slot);
        });
    }
}

