import { Document } from 'mongoose';

export interface ICar extends Document {

    name: string;
    image: string;
    // TODO outdated, remove
    steering: number;
    dragConstant: number;
    wheelFrictionConstant: number;
    engineForce: number;
    brakingForce: number;
    mass: number;

}