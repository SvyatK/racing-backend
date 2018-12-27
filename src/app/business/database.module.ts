import {Module} from '@nestjs/common';
import {databaseProviders} from './database.providers';
import {UserDao} from './dao/user.dao';
import {usersProviders} from './providers/users.providers';
import {carsProviders} from './providers/cars.providers';
import {CarDao} from './dao/car.dao';
import {lobbiesProviders} from './providers/lobbies.providers';
import {LobbyDao} from './dao/lobby.dao';

@Module({
    providers: [
        ...databaseProviders,
        ...usersProviders,
        ...carsProviders,
        ...lobbiesProviders,
        UserDao,
        CarDao,
        LobbyDao
    ],
    exports: [
        ...databaseProviders,
        ...usersProviders,
        ...carsProviders,
        ...lobbiesProviders,
        UserDao,
        CarDao,
        LobbyDao
    ],
})
export class DatabaseModule {
}