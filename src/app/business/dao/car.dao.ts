import {Model} from 'mongoose';
import {Inject, Injectable} from '@nestjs/common';
import {ICar} from '../interfaces/car.interface';

@Injectable()
export class CarDao {

    constructor(@Inject('CarModelToken') private readonly carModel: Model<ICar>) {
    }

    async getAllCars(): Promise<ICar[]> {
        return this.carModel.find();
    }

}