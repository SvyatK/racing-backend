import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiProduces, ApiResponse } from '@nestjs/swagger';
import { CarDataDto } from '../dto/responses/car-data.dto';
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
    @ApiProduces('CarDataDto[]')
    async getAllCars(): Promise<CarDataDto[]> {
        return this.carService.getAllCars();
    }

}
