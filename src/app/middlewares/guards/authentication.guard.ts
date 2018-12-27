import {CanActivate, ExecutionContext, HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {Observable} from 'rxjs/index';

@Injectable()
export class AuthenticationGuard implements CanActivate {
    constructor() {
    }

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const req = context.getArgs()[0];
        if ( req.session && req.session.user ) {
            return true;
        }
        throw new HttpException('Please login first', HttpStatus.UNAUTHORIZED);
    }
}