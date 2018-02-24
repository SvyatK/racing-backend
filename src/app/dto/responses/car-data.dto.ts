import { ApiModelProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';
import * as _ from 'lodash';
import { ICar } from '../../business/interfaces/car.interface';

export class CarDataDto {

    @ApiModelProperty({ type: String })
    @IsString()
    readonly name: string;

    @ApiModelProperty({ type: String })
    @IsString()
    readonly image: string;

    @ApiModelProperty({ type: Number })
    @IsNumber()
    readonly max_acceleration: number;

    @ApiModelProperty({ type: Number })
    @IsNumber()
    readonly max_deceleration: number;

    @ApiModelProperty({ type: Number })
    @IsNumber()
    readonly steering: number;

    static fromCar(car: ICar): CarDataDto {
        return _.pick(car, [ 'name', 'image', 'max_acceleration', 'max_deceleration', 'steering' ]);
    }

}