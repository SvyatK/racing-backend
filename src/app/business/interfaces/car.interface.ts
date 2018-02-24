import { Document } from 'mongoose';

export interface ICar extends Document {

    name: string;
    image: string;
    // TODO camelcase convention
    max_acceleration: number;
    max_deceleration: number;
    steering: number;
}