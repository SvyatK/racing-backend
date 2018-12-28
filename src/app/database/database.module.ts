import {Module} from '@nestjs/common';
import {databaseProviders} from './database.providers';
import {daoProviders} from './dao.providers';

@Module({
    providers: [
        ...databaseProviders,
        ...daoProviders,
    ],
    exports: [
        ...databaseProviders,
        ...daoProviders,
    ],
})
export class DatabaseModule {
}