import { Connection } from 'mongoose';
import { UserSchema } from '../schemas/user.schema';
import { IUser } from '../interfaces/user.interface';
export const usersProviders = [
    {
        provide: 'UserModelToken',
        useFactory: (connection: Connection) => connection.model<IUser>('User', UserSchema),
        inject: ['DbConnectionToken'],
    },
];