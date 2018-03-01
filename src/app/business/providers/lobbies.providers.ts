import { Connection } from 'mongoose';
import { ILobby } from '../interfaces/lobby.interface';
import { LobbySchema } from '../schemas/lobby.schema';

export const lobbiesProviders = [
    {
        provide: 'LobbyModelToken',
        useFactory: (connection: Connection) => connection.model<ILobby>('Lobby', LobbySchema),
        inject: [ 'DbConnectionToken' ],
    },
];