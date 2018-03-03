import { Component, HttpException, HttpStatus } from '@nestjs/common';
import { Request as ExpressRequest } from 'express';
import { LobbyDTO } from '../dto/responses/lobby.dto';
import { IUser } from '../business/interfaces/user.interface';
import { UserDao } from '../business/dao/user.dao';
import { ILobby } from '../business/interfaces/lobby.interface';
import { LobbyDao } from '../business/dao/lobby.dao';
import { ChildProcess, fork } from 'child_process';
import * as path from 'path';
import { GamingServersManager } from '../managers/gaming-servers.manager';
import { ChildProcessMessage } from '../../gaming-worker/consts/child-process-message.const';

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
        const lobbyModel: ILobby = await this.lobbyDao.create(userModel);
        let port: number = this.gamingServersManager.acquirePort(lobbyModel._id);
        if ( port === -1 ) {
            await this.lobbyDao.delete(lobbyModel);
            throw new HttpException('Server overloaded. Try again later', HttpStatus.NOT_ACCEPTABLE);
        }
        lobbyModel.serverUrl = `${process.env.SERVER_URL || 'http://localhost'}:${port}`;
        await lobbyModel.save();

        try {
            const process: ChildProcess = await this.startGamingServer(lobbyModel, port);
            process.on('close', () => {
                console.log(`Gaming server for lobby ${lobbyModel._id} closed`);
                this.gamingServersManager.releasePort(lobbyModel._id);
            });
            return LobbyDTO.fromLobby(lobbyModel);
        } catch (err) {
            throw new HttpException('Gaming server start failed. Try again later', HttpStatus.GONE);
        }
    }

    async startGamingServer(lobbyModel: ILobby, port: number): Promise<ChildProcess> {
        return new Promise<ChildProcess>((resolve, reject) => {
            const forked: ChildProcess = fork(path.join(__dirname, '../../../index-worker.js'), [ lobbyModel._id, port ]);
            forked.once('message', (msg) => {
                if (msg === ChildProcessMessage.STARTED) {
                    resolve(forked);
                } else {
                    reject(msg);
                }
            });
        });
    }

}