import {ApiModelProperty} from '@nestjs/swagger';
import {IsNumber, IsString} from 'class-validator';
import * as _ from 'lodash';
import CarEntity from '../../database/entities/car.entity';

export class CarDataDTO {

    @ApiModelProperty({ type: String })
    @IsString()
    readonly name: string;

    @ApiModelProperty({ type: String })
    @IsString()
    readonly image: string;

    @ApiModelProperty({ type: Number })
    @IsNumber()
    readonly steering: number;

    @ApiModelProperty({ type: Number })
    @IsNumber()
    readonly dragConstant: number;

    @ApiModelProperty({ type: Number })
    @IsNumber()
    readonly wheelFrictionConstant: number;

    @ApiModelProperty({ type: Number })
    @IsNumber()
    readonly engineForce: number;

    @ApiModelProperty({ type: Number })
    @IsNumber()
    readonly brakingForce: number;

    @ApiModelProperty({ type: Number })
    @IsNumber()
    readonly mass: number;

    static fromCar(car: CarEntity): CarDataDTO {
        return _.pick(car, [ 'name', 'image', 'steering', 'dragConstant', 'wheelFrictionConstant', 'engineForce', 'brakingForce', 'mass' ]);
    }

}