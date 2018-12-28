import {ApiModelProperty} from '@nestjs/swagger';
import {IsInt, IsString} from 'class-validator';
import * as _ from 'lodash';
import {OwnUserDataDTO} from './own-user-data.dto';
import UserEntity from '../../database/entities/user.entity';

export class UserDataDTO {

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

    static fromUser(user: UserEntity): UserDataDTO {
        return _.pick(user, ['id', 'login', 'firstName', 'lastName', 'displayName', 'countryCode', 'avatar']);
    }

    static fromOwnUserDataDTO(ownUserData: OwnUserDataDTO): UserDataDTO {
        return _.pick(ownUserData, ['id', 'login', 'firstName', 'lastName', 'displayName', 'countryCode', 'avatar']);
    }

}