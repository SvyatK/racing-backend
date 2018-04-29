import { UserDataDTO } from '../../app/dto/responses/user-data.dto';
import StepDataDto from '../dto/step-data.dto';

export default class PlayerModel {

    public userModel: UserDataDTO;
    public connection: SocketIO.Socket;
    // TODO adjust structure here; add types
    public data: { item: StepDataDto, ready: boolean, finished: boolean };

    constructor(connection: SocketIO.Socket, model: UserDataDTO, data: { item: StepDataDto, ready: boolean, finished: boolean }) {
        this.userModel = model;
        this.connection = connection;
        this.data = data;
    }
}