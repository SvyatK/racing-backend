import { Module } from '@nestjs/common';
import { databaseProviders } from './database.providers';
import { UserDao } from './dao/user.dao';
import { usersProviders } from './providers/users.providers';
import { carsProviders } from './providers/cars.providers';
import { CarDao } from './dao/car.dao';

@Module({
    components: [
        ...databaseProviders,
        ...usersProviders,
        ...carsProviders,
        UserDao,
        CarDao
    ],
    exports: [
        ...databaseProviders,
        ...usersProviders,
        ...carsProviders,
        UserDao,
        CarDao
    ],
})
export class DatabaseModule {
}