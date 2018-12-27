import {Model} from 'mongoose';
import {Inject, Injectable} from '@nestjs/common';
import {ILobby} from '../interfaces/lobby.interface';
import {IUser} from '../interfaces/user.interface';
import {GameState} from '../interfaces/enum/game-state.enum';

@Injectable()
export class LobbyDao {

    constructor(@Inject('LobbyModelToken') private readonly lobbyModel: Model<ILobby>) {
    }

    async create(owner: IUser): Promise<ILobby> {
        return this.lobbyModel.create({
            name: owner.login,
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

    async delete(lobby: ILobby): Promise<ILobby> {
        return lobby.remove();
    }

}