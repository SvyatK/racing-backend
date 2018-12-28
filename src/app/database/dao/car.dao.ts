import {Injectable} from '@nestjs/common';
import CarEntity from '../entities/car.entity';

@Injectable()
export class CarDao {

    constructor() {
    }

    async getAllCars(): Promise<CarEntity[]> {
        return CarEntity.findAll();
    }

}