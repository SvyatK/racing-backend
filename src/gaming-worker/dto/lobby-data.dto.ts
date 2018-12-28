import PlayerDataDTO from './player-data.dto';

export default class LobbyDataDTO {

    lobbyId: number;
    map: string;
    slots: PlayerDataDTO[];
    spectators: PlayerDataDTO[];

}