import {UserDataDTO} from '../../app/dto/responses/user-data.dto';
import {CarDataDTO} from '../../app/dto/responses/car-data.dto';
import StepDataModel from './step-data.model';

export default class PlayerModel {

    constructor(
        public connectionId: string,
        public userModel: UserDataDTO,
        public isLobbyOwner: boolean = false,
        public car: CarDataDTO = null,
        public slot: number = -1,
        public isLoading: boolean = true,
        public isReadyToStart: boolean = true, // not used right now, automatically ready as soon as loaded map and cars
        public currentStep: StepDataModel = null,
    ) {
    }
}