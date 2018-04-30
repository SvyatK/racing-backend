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
import { AppUtils } from '../utils/app.utils';
import { GameState } from '../business/interfaces/enum/game-state.enum';
import { LobbyInitialDataDTO } from '../dto/requests/lobby-initial-data.dto';
import MathUtils from '../utils/math.utils';

@Component()
export class LobbyService {
    constructor(private readonly userDao: UserDao,
                private readonly lobbyDao: LobbyDao,
                private readonly gamingServersManager: GamingServersManager) {
    }

    async quickStart(req: ExpressRequest): Promise<LobbyDTO> {
        const openLobbies: ILobby[] = await this.lobbyDao.getOpenedLobbies();
        let randomLobby: ILobby;
        while (!randomLobby && openLobbies.length > 0) {
            randomLobby = openLobbies[ Math.floor(Math.random() * openLobbies.length) ];
            const lobbyPort: number = +randomLobby.serverUrl.substr(randomLobby.serverUrl.lastIndexOf(':') + 1);
            const lobbyId: string = this.gamingServersManager.getRunningLobbyId(lobbyPort);
            if ( !lobbyId || lobbyId != randomLobby.id ) {
                console.log(`Found orphan lobby (port ${lobbyPort})! ${lobbyId ? ('Expected ' + randomLobby.id + '; found ' + lobbyId) : 'There is no such lobby in gaming server manager'}`);
                randomLobby.state = GameState.Errored;
                await randomLobby.save();
                openLobbies.splice(openLobbies.indexOf(randomLobby), 1);
                randomLobby = null;
            }
        }
        if ( randomLobby ) {
            return LobbyDTO.fromLobby(randomLobby);
        }
        return this.createLobby(req);
    }

    async getLobbies(): Promise<LobbyDTO[]> {
        const lobbies: ILobby[] = await this.lobbyDao.getOpenedLobbies();
        return lobbies.map((lobby: ILobby): LobbyDTO => LobbyDTO.fromLobby(lobby));
    }

    async createLobby(req: ExpressRequest, initialData: LobbyInitialDataDTO = new LobbyInitialDataDTO()): Promise<LobbyDTO> {
        const userModel: IUser = await this.userDao.getUserById(req.session.user._id);
        const lobbyModel: ILobby = await this.lobbyDao.create(userModel);
        let port: number = this.gamingServersManager.acquirePort(lobbyModel._id);
        if ( port === -1 ) {
            await this.lobbyDao.delete(lobbyModel);
            throw new HttpException('Server overloaded. Try again later', HttpStatus.NOT_ACCEPTABLE);
        }
        lobbyModel.serverUrl = `::${port}`;
        // FIXME re-check validation so other values can't get here
        lobbyModel.playersCount = MathUtils.toRange(initialData.playersCount, 1, 8);
        await lobbyModel.save();
        let gamingProcess: ChildProcess;
        try {
            gamingProcess = await this.startGamingServer(lobbyModel, port, userModel);
            gamingProcess.on('message', async (msg) => {
                if ( msg === ChildProcessMessage.READY ) {
                    lobbyModel.state = GameState.WaitingForPlayers;
                    await lobbyModel.save();
                } else if ( msg === ChildProcessMessage.CANCELLED ) {
                    lobbyModel.state = GameState.Cancelled;
                    await lobbyModel.save();
                } else if ( msg === ChildProcessMessage.LOBBY_FULL ) {
                    lobbyModel.state = GameState.LobbyFull;
                    await lobbyModel.save();
                } else if ( msg === ChildProcessMessage.GAME_STARTED ) {
                    lobbyModel.state = GameState.Playing;
                    await lobbyModel.save();
                } else if ( msg === ChildProcessMessage.FINISHED ) {
                    lobbyModel.state = GameState.Finished;
                    await lobbyModel.save();
                }
            });
            gamingProcess.on('close', () => {
                console.log(`Gaming server for lobby ${lobbyModel._id} closed`);
                this.gamingServersManager.releasePort(lobbyModel._id);
            });
            return LobbyDTO.fromLobby(lobbyModel);
        } catch (err) {
            if ( gamingProcess ) {
                gamingProcess.kill();
            }
            this.gamingServersManager.releasePort(lobbyModel._id);
            throw new HttpException('Gaming server start failed. Try again later', HttpStatus.GONE);
        }
    }

    async startGamingServer(lobbyModel: ILobby, port: number, owner: IUser): Promise<ChildProcess> {
        // automatically rejects in 10 seconds if nothing happen
        return new Promise<ChildProcess>(async (resolve, reject) => {
            const forked: ChildProcess = fork(path.join(__dirname, '../../../index-worker.js'), [ lobbyModel._id, port, owner._id, lobbyModel.playersCount ]);
            try {
                await AppUtils.doWithFailTimeout<void>(
                    new Promise<void>((resolve, reject) => {
                        forked.once('message', (msg) => {
                            if ( msg === ChildProcessMessage.SERVER_STARTED ) {
                                resolve();
                            } else {
                                forked.kill();
                                reject(msg);
                            }
                        });
                    }),
                    10000
                );
                resolve(forked);
            } catch (err) {
                forked.kill();
                reject();
            }
        });
    }

}