import { UserDataDTO } from '../../app/dto/responses/user-data.dto';
import { CarDataDTO } from '../../app/dto/responses/car-data.dto';
import PlayerModel from '../models/player.model';

export default class PlayerDataDTO {

    public playerId: string;
    public user: UserDataDTO;
    public car: CarDataDTO;
    // TODO adjust structure here; add type
    public data: any;

    public static fromPlayerModel(playerModel: PlayerModel): PlayerDataDTO {
        return {
            playerId: playerModel.connection.client.id,
            user: playerModel.userModel,
            car: null, // TODO add car
            data: playerModel.data
        }
    }

}