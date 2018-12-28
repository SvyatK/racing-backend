import {Injectable} from '@nestjs/common';
import UserEntity from '../entities/user.entity';
import LobbyEntity from '../entities/lobby.entity';
import {GameState} from '../datatypes/game-state.enum';

@Injectable()
export class LobbyDao {

    constructor() {
    }

    async create(owner: UserEntity): Promise<LobbyEntity> {
        return LobbyEntity.create({
            name: owner.login,
            owner,
        });
    }

    async getOpenedLobbies(): Promise<LobbyEntity[]> {
        return LobbyEntity
            .findAll({
                where: {
                    state: GameState.WaitingForPlayers
                },
                include: [UserEntity],
            });
    }

    async delete(lobby: LobbyEntity): Promise<void> {
        await LobbyEntity.destroy();
    }

}