import {Injectable} from "@nestjs/common";
import MapEntity from "../entities/map.entity";

@Injectable()
export class MapDao {

    constructor() {
    }

    async getMaps(): Promise<MapEntity[]> {
        return MapEntity.findAll();
    }

}