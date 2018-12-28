import {Injectable} from '@nestjs/common';
import {CarDao} from '../database/dao/car.dao';
import {CarDataDTO} from '../dto/responses/car-data.dto';
import CarEntity from '../database/entities/car.entity';

@Injectable()
export class CarService {
    constructor(private readonly carDao: CarDao) {
    }

    async getAllCars(): Promise<CarDataDTO[]> {
        const cars: CarEntity[] = await this.carDao.getAllCars();
        return cars.map((car: CarEntity): CarDataDTO => {
            return CarDataDTO.fromCar(car);
        });
    }

}