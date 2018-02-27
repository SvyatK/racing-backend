import { Component } from '@nestjs/common';
import { Request as ExpressRequest } from 'express';
import { LobbyDTO } from '../dto/responses/lobby.dto';
import { IUser } from '../business/interfaces/user.interface';
import { UserDao } from '../business/dao/user.dao';
import { UserDataDTO } from '../dto/responses/user-data.dto';

@Component()
export class LobbyService {
    constructor(private readonly userDao: UserDao) {
    }

    async createLobby(req: ExpressRequest): Promise<LobbyDTO> {
        const userModel: IUser = await this.userDao.getUserById(req.session.user._id);
        // TODO implement
        return {
            name: userModel.login,
            serverUrl: 'http://test.com/new-lobby',
            owner: UserDataDTO.fromUser(userModel)
        };
    }

    async getLobbies(): Promise<LobbyDTO[]> {
        // TODO implement
        return [];
    }

    async quickStart(req: ExpressRequest): Promise<LobbyDTO> {
        // TODO lobby
        const openLobbies: LobbyDTO[] = await this.getLobbies();
        return this.createLobby(req);
    }

}