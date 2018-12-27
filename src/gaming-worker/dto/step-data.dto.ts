import CarPositioningModel from '../models/car-positioning.model';
import StepTrajectoryModel from '../models/step-trajectory.model';

export default class StepDataDto {

    public id: number; // TODO rename to slot
    public finalCarProperties: CarPositioningModel = new CarPositioningModel();
    public trajectory: StepTrajectoryModel;
    public acceleration: number;

}
