import { Model } from 'mongoose';
import { Component, Inject } from '@nestjs/common';
import { ICar } from '../interfaces/car.interface';

@Component()
export class CarDao {

    constructor(@Inject('CarModelToken') private readonly carModel: Model<ICar>) {
    }

    async getAllCars(): Promise<ICar[]> {
        return this.carModel.find();
    }

}