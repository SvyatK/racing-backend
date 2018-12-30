import {CarDao} from './dao/car.dao';
import {LobbyDao} from './dao/lobby.dao';
import {UserDao} from './dao/user.dao';
import {MapDao} from "./dao/map.dao";

export const daoProviders = [
    CarDao,
    LobbyDao,
    UserDao,
    MapDao
];