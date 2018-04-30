import { ApiModelProperty } from '@nestjs/swagger';
import { IsInt, Max, Min } from 'class-validator';

export class LobbyInitialDataDTO {

    @ApiModelProperty({ type: Number })
    @IsInt()
    @Min(1)
    @Max(8)
    readonly playersCount: number = 2;

}