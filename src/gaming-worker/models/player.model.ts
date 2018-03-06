import { UserDataDTO } from '../../app/dto/responses/user-data.dto';

export default class PlayerModel {

    public userModel: UserDataDTO;
    public connection: SocketIO.Socket;
    // TODO adjust structure here; add type
    public data: any;

    constructor(connection: SocketIO.Socket, model: UserDataDTO, data: any) {
        this.userModel = model;
        this.connection = connection;
        this.data = data;
    }
}