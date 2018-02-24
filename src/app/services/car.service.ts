import { Component } from '@nestjs/common';
import { CarDao } from '../business/dao/car.dao';
import { CarDataDto } from '../dto/responses/car-data.dto';
import { ICar } from '../business/interfaces/car.interface';

@Component()
export class CarService {
    constructor(private readonly carDao: CarDao) {
    }

    async getAllCars(): Promise<CarDataDto[]> {
        const cars: ICar[] = await this.carDao.getAllCars();
        return cars.map((car: ICar): CarDataDto => {
            return CarDataDto.fromCar(car);
        });
    }

}