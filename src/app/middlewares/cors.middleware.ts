import {Injectable, MiddlewareFunction, NestMiddleware} from '@nestjs/common';

@Injectable()
export class CorsMiddleware implements NestMiddleware {
    resolve(...args: any[]): MiddlewareFunction {
        return (req, res, next) => {
            res.header('Access-Control-Allow-Origin', req.headers.origin as string);
            res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
            res.setHeader('Access-Control-Allow-Credentials', 'true');
            next();
        };
    }
}