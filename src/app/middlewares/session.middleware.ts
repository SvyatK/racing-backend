import { ExpressMiddleware, Middleware, NestMiddleware } from '@nestjs/common';
import session = require('express-session');

@Middleware()
export class SessionMiddleware implements NestMiddleware {
    resolve(...args: any[]): ExpressMiddleware {
        console.log('Setting up session middleware');
        return session({
            secret: '124312edr1123rfdweqrqwerqwer3e12e41242112',
            resave: false,
            saveUninitialized: false,
            // store: new redisStore({
            //     logErrors: true
            // }),
            cookie: { secure: false }
        });
    }
}