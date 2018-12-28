import {Column, DataType, Model, Table} from 'sequelize-typescript';

@Table({
    tableName: 'Car',
    modelName: 'Car',
    timestamps: false,
})
export default class CarEntity extends Model<CarEntity> {

    @Column({
        type: DataType.TEXT,
        allowNull: false,
        unique: true,
    })
    name: string;

    @Column({
        type: DataType.TEXT,
    })
    image: string;

    // TODO outdated, remove after fixing physics
    @Column({
        type: DataType.DECIMAL,
        allowNull: false,
    })
    steering: number;

    @Column({
        type: DataType.DECIMAL,
        allowNull: false,
    })
    dragConstant: number;

    @Column({
        type: DataType.DECIMAL,
        allowNull: false,
    })
    wheelFrictionConstant: number;

    @Column({
        type: DataType.DECIMAL,
        allowNull: false,
    })
    engineForce: number;

    @Column({
        type: DataType.DECIMAL,
        allowNull: false,
    })
    brakingForce: number;

    @Column({
        type: DataType.DECIMAL,
        allowNull: false,
    })
    mass: number;

}