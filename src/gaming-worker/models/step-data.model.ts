import CarPositioningModel from '../models/car-positioning.model';
import StepTrajectoryModel from '../models/step-trajectory.model';

export default class StepDataModel {

    constructor(
        public finalCarProperties: CarPositioningModel = new CarPositioningModel(),
        public trajectory: StepTrajectoryModel = null,
        public acceleration: number = 0,
    ) {

    }

}
