import { Component } from '@nestjs/common';
import { Request as ExpressRequest } from 'express';
import { LobbyDTO } from '../dto/responses/lobby.dto';
import { IUser } from '../business/interfaces/user.interface';
import { UserDao } from '../business/dao/user.dao';
import { ILobby } from '../business/interfaces/lobby.interface';
import { LobbyDao } from '../business/dao/lobby.dao';

@Component()
export class LobbyService {
    constructor(private readonly userDao: UserDao,
                private readonly lobbyDao: LobbyDao) {
    }

    async createLobby(req: ExpressRequest): Promise<LobbyDTO> {
        const userModel: IUser = await this.userDao.getUserById(req.session.user._id);
        const lobbyModel: ILobby = await this.lobbyDao.create(userModel, 'http://test.com/new-lobby');
        return LobbyDTO.fromLobby(lobbyModel);
    }

    async getLobbies(): Promise<LobbyDTO[]> {
        const lobbies: ILobby[] = await this.lobbyDao.getOpenedLobbies();
        return lobbies.map((lobby: ILobby): LobbyDTO => LobbyDTO.fromLobby(lobby));
    }

    async quickStart(req: ExpressRequest): Promise<LobbyDTO> {
        const openLobbies: LobbyDTO[] = await this.getLobbies();
        if ( openLobbies.length > 0 ) {
            return openLobbies[ Math.floor(Math.random() * openLobbies.length) ];
        }
        return this.createLobby(req);
    }

}