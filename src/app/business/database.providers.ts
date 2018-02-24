import * as mongoose from 'mongoose';

export const databaseProviders = [
    {
        provide: 'DbConnectionToken',
        useFactory: async (): Promise<mongoose.Connection> => {
            (mongoose as any).Promise = global.Promise;
            return (await mongoose.connect('mongodb://test_user:test13@ds151651.mlab.com:51651/racingdb')).connection;
        },
    },
];