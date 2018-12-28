import {Column, DataType, Model, Table} from 'sequelize-typescript';

@Table({
    tableName: 'User',
    modelName: 'User',
})
export default class UserEntity extends Model<UserEntity> {

    @Column({
        type: DataType.TEXT,
        allowNull: false,
        unique: true,
    })
    login: string;

    @Column({
        type: DataType.TEXT,
        allowNull: false,
    })
    password: string;

    @Column({
        type: DataType.TEXT,
        allowNull: false,
    })
    firstName: string;

    @Column({
        type: DataType.TEXT,
        allowNull: false,
    })
    lastName: string;

    @Column({
        type: DataType.TEXT,
    })
    displayName: string;

    @Column({
        type: DataType.TEXT,
        allowNull: false,
    })
    countryCode: string;

    @Column({
        type: DataType.TEXT,
        allowNull: true,
    })
    avatar: string;

}