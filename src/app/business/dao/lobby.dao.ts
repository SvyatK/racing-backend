import { Model } from 'mongoose';
import { Component, Inject } from '@nestjs/common';
import { ILobby } from '../interfaces/lobby.interface';
import { IUser } from '../interfaces/user.interface';
import { GameState } from '../interfaces/enum/game-state.enum';

@Component()
export class LobbyDao {

    constructor(@Inject('LobbyModelToken') private readonly lobbyModel: Model<ILobby>) {
    }

    async create(owner: IUser, serverUrl: string): Promise<ILobby> {
        return this.lobbyModel.create({
            name: owner.login,
            serverUrl: serverUrl,
            owner: owner
        });
    }

    async getOpenedLobbies(): Promise<ILobby[]> {
        return this.lobbyModel
                   .find({
                       state: GameState.WaitingForPlayers
                   })
                   .populate({ path: 'owner' });
    }

}