import {Column, DataType, Model, Table} from 'sequelize-typescript';

@Table({
    tableName: 'Map',
    modelName: 'Map',
})
export default class MapEntity extends Model<MapEntity> {

    @Column({
        type: DataType.TEXT,
        allowNull: false,
    })
    name: string;

    @Column({
        type: DataType.TEXT,
    })
    url: string;

}