import { ApiModelProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { IUser } from '../../business/interfaces/user.interface';
import * as _ from 'lodash';

export class OwnUserDataDTO {

    @ApiModelProperty({ type: String })
    @IsString()
    readonly login: string;

    // TODO remove this field
    @ApiModelProperty({ type: String })
    @IsString()
    readonly password: string;

    static fromUser (user: IUser): OwnUserDataDTO {
        return _.pick(user, ['login', 'password'])
    }

}