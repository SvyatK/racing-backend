import { Component, HttpException, HttpStatus } from '@nestjs/common';
import { Request as ExpressRequest } from 'express';
import { LobbyDTO } from '../dto/responses/lobby.dto';
import { IUser } from '../business/interfaces/user.interface';
import { UserDao } from '../business/dao/user.dao';
import { ILobby } from '../business/interfaces/lobby.interface';
import { LobbyDao } from '../business/dao/lobby.dao';
import { fork } from 'child_process';
import * as path from 'path';
import { GamingServersManager } from '../managers/gaming-servers.manager';

@Component()
export class LobbyService {
    constructor(private readonly userDao: UserDao,
                private readonly lobbyDao: LobbyDao,
                private readonly gamingServersManager: GamingServersManager) {
    }

    async quickStart(req: ExpressRequest): Promise<LobbyDTO> {
        const openLobbies: LobbyDTO[] = await this.getLobbies();
        if ( openLobbies.length > 0 ) {
            return openLobbies[ Math.floor(Math.random() * openLobbies.length) ];
        }
        return this.createLobby(req);
    }

    async getLobbies(): Promise<LobbyDTO[]> {
        const lobbies: ILobby[] = await this.lobbyDao.getOpenedLobbies();
        return lobbies.map((lobby: ILobby): LobbyDTO => LobbyDTO.fromLobby(lobby));
    }

    async createLobby(req: ExpressRequest): Promise<LobbyDTO> {
        const userModel: IUser = await this.userDao.getUserById(req.session.user._id);
        const lobbyModel: ILobby = await this.lobbyDao.create(userModel, `${process.env.REDIS_URL || 'http://localhost'}:${1234}`);
        let port: number = this.gamingServersManager.acquirePort(lobbyModel._id);
        if ( port === -1 ) {
            throw new HttpException('Server overloaded. Try again later', HttpStatus.NOT_ACCEPTABLE);
        }
        const forked = fork(path.join(__dirname, '../../../index-worker.js'), [ lobbyModel._id, port ]);
        forked.on('message', (msg) => {
            console.log('Message from child', msg);
        });
        forked.on('close', () => {
            console.log(`Gaming server for lobby ${lobbyModel._id} closed`);
            this.gamingServersManager.releasePort(lobbyModel._id);
        });
        // forked.send({ hello: 'world' });
        return LobbyDTO.fromLobby(lobbyModel);
    }

}