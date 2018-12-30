import { Injectable } from '@nestjs/common';
import { MapDao } from '../database/dao/map.dao';
import { MapDTO } from '../dto/responses/map.dto';

@Injectable()
export class MapService {
    constructor(private readonly mapDao: MapDao) {
    }

    async getMaps(): Promise<MapDTO[]> {
        return await this.mapDao.getMaps();
    }

}