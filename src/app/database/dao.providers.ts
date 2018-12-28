import {CarDao} from './dao/car.dao';
import {LobbyDao} from './dao/lobby.dao';
import {UserDao} from './dao/user.dao';

export const daoProviders = [
    CarDao,
    LobbyDao,
    UserDao,
];