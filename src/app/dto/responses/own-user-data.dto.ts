import { ApiModelProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { IUser } from '../../business/interfaces/user.interface';
import * as _ from 'lodash';

export class OwnUserDataDTO {

    @ApiModelProperty({ type: String })
    @IsString()
    readonly _id: string;

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

    static fromUser(user: IUser): OwnUserDataDTO {
        return _.pick(user, [ '_id', 'login', 'firstName', 'lastName', 'displayName', 'countryCode', 'avatar' ]);
    }

}