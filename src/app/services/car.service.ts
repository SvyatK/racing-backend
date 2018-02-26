import { Component } from '@nestjs/common';
import { CarDao } from '../business/dao/car.dao';
import { CarDataDTO } from '../dto/responses/car-data.dto';
import { ICar } from '../business/interfaces/car.interface';

@Component()
export class CarService {
    constructor(private readonly carDao: CarDao) {
    }

    async getAllCars(): Promise<CarDataDTO[]> {
        const cars: ICar[] = await this.carDao.getAllCars();
        return cars.map((car: ICar): CarDataDTO => {
            return CarDataDTO.fromCar(car);
        });
    }

}