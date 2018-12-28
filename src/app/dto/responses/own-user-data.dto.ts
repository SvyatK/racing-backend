import {ApiModelProperty} from '@nestjs/swagger';
import {IsInt, IsString} from 'class-validator';
import * as _ from 'lodash';
import UserEntity from '../../database/entities/user.entity';

export class OwnUserDataDTO {

    @ApiModelProperty({ type: Number })
    @IsInt()
    readonly id: number;

    @ApiModelProperty({ type: String })
    @IsString()
    readonly login: string;

    @ApiModelProperty({ type: String })
    @IsString()
    readonly firstName: string;

    @ApiModelProperty({ type: String })
    @IsString()
    readonly lastName: string;

    @ApiModelProperty({ type: String })
    @IsString()
    readonly displayName: string;

    @ApiModelProperty({ type: String })
    @IsString()
    readonly countryCode: string;

    @ApiModelProperty({ type: String })
    @IsString()
    readonly avatar: string;

    static fromUser(user: UserEntity): OwnUserDataDTO {
        return _.pick(user, ['id', 'login', 'firstName', 'lastName', 'displayName', 'countryCode', 'avatar']) as OwnUserDataDTO;
    }

}