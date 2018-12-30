import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiProduces, ApiResponse } from '@nestjs/swagger';
import { CarDataDTO } from '../dto/responses/car-data.dto';
import { CarService } from '../services/car.service';
import { AuthenticationGuard } from '../middlewares/guards/authentication.guard';

@Controller('car')
export class CarController {
    constructor(private readonly carService: CarService) {
    }

    @Get()
    @ApiOperation({ title: 'Get all available cars' })
    @ApiResponse({
        status: 401,
        description: 'Please login first'
    })
    @ApiResponse({
        status: 200,
        description: 'Ok'
    })
    @ApiProduces('CarDataDTO[]')
    async getAllCars(): Promise<CarDataDTO[]> {
        return this.carService.getAllCars();
    }

}
