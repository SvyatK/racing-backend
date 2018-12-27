import PlayerDataDTO from './player-data.dto';

export default class LobbyDataDTO {

    lobbyId: string;
    map: string;
    slots: PlayerDataDTO[];
    spectators: PlayerDataDTO[];

}