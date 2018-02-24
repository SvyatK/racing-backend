import { Connection } from 'mongoose';
import { ICar } from '../interfaces/car.interface';
import { CarSchema } from '../schemas/car.schema';

export const carsProviders = [
    {
        provide: 'CarModelToken',
        useFactory: (connection: Connection) => connection.model<ICar>('Car', CarSchema),
        inject: [ 'DbConnectionToken' ],
    },
];