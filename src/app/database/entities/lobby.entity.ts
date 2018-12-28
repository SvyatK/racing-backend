import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from 'sequelize-typescript';
import UserEntity from './user.entity';
import {GameState} from '../datatypes/game-state.enum';

@Table({
    tableName: 'Lobby',
    modelName: 'Lobby',
})
export default class LobbyEntity extends Model<LobbyEntity> {

    @Column({
        type: DataType.TEXT,
        allowNull: false,
    })
    name: string;

    @Column({
        type: DataType.TEXT,
    })
    serverUrl: string;

    @Column({
        type: DataType.INTEGER,
    })
    playersCount: number;

    @Column({
        type: DataType.ENUM(...Object.keys(GameState)),
        defaultValue: GameState.Initializing,
    })
    state: GameState;

    @ForeignKey(() => UserEntity)
    @Column
    ownerId: number;

    @BelongsTo(() => UserEntity)
    owner: UserEntity;

}