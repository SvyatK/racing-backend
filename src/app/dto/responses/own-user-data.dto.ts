import { ApiModelProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { IUser } from '../../business/interfaces/user.interface';
import * as _ from 'lodash';

export class OwnUserDataDto {

    @ApiModelProperty({ type: String })
    @IsString()
    readonly login: string;

    @ApiModelProperty({ type: String })
    @IsString()
    readonly password: string;

    static fromUser (user: IUser): OwnUserDataDto {
        return _.pick(user, ['login', 'password'])
    }

}