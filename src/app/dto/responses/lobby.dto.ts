import {ApiModelProperty} from '@nestjs/swagger';
import {IsString} from 'class-validator';
import {UserDataDTO} from './user-data.dto';
import LobbyEntity from '../../database/entities/lobby.entity';
import UserEntity from '../../database/entities/user.entity';

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

    // TODO class transformer
    static fromLobby(lobby: LobbyEntity): LobbyDTO {
        return {
            name: lobby.name,
            serverUrl: lobby.serverUrl,
            owner: UserDataDTO.fromUser(lobby.owner as UserEntity)
        };
    }

}