import { ApiModelProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { UserDataDTO } from './user-data.dto';
import { ILobby } from '../../business/interfaces/lobby.interface';
import { IUser } from '../../business/interfaces/user.interface';
import { Types } from 'mongoose';
import ObjectId = Types.ObjectId;

export class LobbyDTO {

    @ApiModelProperty({ type: String })
    @IsString()
    readonly name: string;

    @ApiModelProperty({ type: String })
    @IsString()
    readonly serverUrl: string;

    @ApiModelProperty({ type: UserDataDTO })
    @IsString()
    readonly owner: UserDataDTO;

    static fromLobby(lobby: ILobby): LobbyDTO {
        return {
            name: lobby.name,
            serverUrl: lobby.serverUrl,
            owner: (lobby.owner instanceof ObjectId) ? null : UserDataDTO.fromUser(lobby.owner as IUser)
        };
    }

}