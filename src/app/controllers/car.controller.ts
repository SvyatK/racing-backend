import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiProduces, ApiResponse } from '@nestjs/swagger';
import { CarDataDTO } from '../dto/responses/car-data.dto';
import { CarService } from '../services/car.service';

@Controller('car')
export class CarController {
    constructor(private readonly carService: CarService) {
    }

    @Get()
    @ApiOperation({ title: 'Get all cars available' })
    @ApiResponse({
        status: 200,
        description: 'Ok'
    })
    @ApiProduces('CarDataDTO[]')
    async getAllCars(): Promise<CarDataDTO[]> {
        return this.carService.getAllCars();
    }

}
