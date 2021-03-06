const env = require('../../../env.json');

export const APP_CONFIG: {
    env: string,
    database: {
        url: string,
        forceRestoreFromFixtures: boolean,
        debug: boolean,
    },
    server: {
        useSSL: boolean,
        ssl?: {
            key: string,
            cert: string,
            ca: string,
        },
        port: number
    }
} = Object.assign(
    {
        env: process.env.NODE_ENV || 'development'
    },
    env[ process.env.NODE_ENV || 'development' ]
);