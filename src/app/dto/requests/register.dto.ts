import { ApiModelProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class RegisterDTO {

    @ApiModelProperty({ type: String })
    @IsString()
    readonly login: string;

    @ApiModelProperty({ type: String })
    @IsString()
    readonly password: string;

}