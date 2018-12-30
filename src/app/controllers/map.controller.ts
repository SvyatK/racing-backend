import {Controller, Get, UseGuards} from '@nestjs/common';
import { ApiOperation, ApiProduces, ApiResponse } from '@nestjs/swagger';
import {AuthenticationGuard} from '../middlewares/guards/authentication.guard';
import {MapService} from '../services/map.service';
import {MapDTO} from '../dto/responses/map.dto';

@Controller('map')
export class MapController {
    constructor(private readonly mapService: MapService) {
    }

    @Get()
    @ApiOperation({ title: 'Get all available maps' })
    @ApiResponse({
        status: 401,
        description: 'Please login first'
    })
    @ApiResponse({
        status: 200,
        description: 'Ok'
    })
    @ApiProduces('MapDTO[]')
    async getMaps(): Promise<MapDTO[]> {
        return this.mapService.getMaps();
    }
}