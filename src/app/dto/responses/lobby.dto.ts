import { ApiModelProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { UserDataDTO } from './user-data.dto';

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

}