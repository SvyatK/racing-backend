import {Injectable, MiddlewareFunction, NestMiddleware} from '@nestjs/common';
import {RequestHandler} from 'express';
import {GatewayMiddleware} from '@nestjs/websockets';
import session = require('express-session');
import connectRedis = require('connect-redis');

const redisStore = connectRedis(session);

const SESSION_MIDDLEWARE_FUNCTION: RequestHandler = session({
    secret: '124312edr1123rfdweqrqwerqwer3e12e41242112',
    resave: false,
    saveUninitialized: false,
    store: new redisStore({
        url: process.env.REDIS_URL || 'redis://localhost:6379',
        logErrors: true
    }),
    cookie: { secure: false }
});

@Injectable()
export class SessionMiddleware implements NestMiddleware {
    resolve(...args: any[]): MiddlewareFunction {
        return SESSION_MIDDLEWARE_FUNCTION;
    }
}

@Injectable()
export class SocketSessionMiddleware implements GatewayMiddleware {
    public resolve(): (socket, next) => void {
        return (socket, next) => {
            SESSION_MIDDLEWARE_FUNCTION(socket.request, socket.request.res, next);
        };
    }
}