import { ApiModelProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { IUser } from '../../business/interfaces/user.interface';
import * as _ from 'lodash';
import { OwnUserDataDTO } from './own-user-data.dto';

export class UserDataDTO {

    @ApiModelProperty({ type: String })
    @IsString()
    readonly _id: string;

    @ApiModelProperty({ type: String })
    @IsString()
    readonly login: string;

    static fromUser(user: IUser): UserDataDTO {
        return _.pick(user, [ '_id', 'login' ]);
    }

    static fromOwnUserDataDTO(ownUserData: OwnUserDataDTO): UserDataDTO {
        return _.pick(ownUserData, [ '_id', 'login' ]);
    }

}