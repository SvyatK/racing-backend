import { ApiModelProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { IUser } from '../../business/interfaces/user.interface';
import * as _ from 'lodash';

export class UserDataDTO {

    @ApiModelProperty({ type: String })
    @IsString()
    readonly login: string;

    static fromUser (user: IUser): UserDataDTO {
        return _.pick(user, ['login'])
    }

}