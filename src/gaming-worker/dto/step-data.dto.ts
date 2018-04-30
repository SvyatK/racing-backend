import CarPositioningModel from '../models/car-positioning.model';
import StepTrajectoryModel from '../models/step-trajectory.model';

export default class StepDataDto {

    public id: number; // FIXME it is a player id, review and fix it's lifecycle
    public finalCarProperties: CarPositioningModel = new CarPositioningModel();
    public trajectory: StepTrajectoryModel;
    public acceleration: number;

}
