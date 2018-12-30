import {Sequelize} from 'sequelize-typescript';
import * as sequelizeFixtures from 'sequelize-fixtures';
import {APP_CONFIG} from '../conf/config';
import CarEntity from './entities/car.entity';

// https://github.com/sequelize/sequelize/issues/8019
(Sequelize as any).postgres.DECIMAL.parse = value => parseFloat(value);

export const databaseProviders = [
    {
        provide: 'SequelizeToken',
        useFactory: async () => {
            const sequelize = new Sequelize({
                url: APP_CONFIG.database.url,
                dialect: 'postgresql',
                // logging: APP_CONFIG.database.debug,
                operatorsAliases: false,
                modelPaths: [__dirname + '/entities'],
            });
            await sequelize.sync({ force: APP_CONFIG.database.forceRestoreFromFixtures });
            if (APP_CONFIG.database.forceRestoreFromFixtures || (await CarEntity.count()) === 0) {
                sequelizeFixtures.loadFiles(
                    [
                        './src/app/database/fixtures/cars.yaml',
                    ],
                    sequelize.models,
                );
                sequelizeFixtures.loadFiles(
                    [
                        './src/app/database/fixtures/maps.yaml',
                    ],
                    sequelize.models,
                );
            }
            return sequelize;
        },
    },
];