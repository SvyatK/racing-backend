import { IsString } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class MapDTO {

    @ApiModelProperty({ type: String })
    @IsString()
    readonly name: string;

    @ApiModelProperty({ type: String })
    @IsString()
    readonly url: string;

}