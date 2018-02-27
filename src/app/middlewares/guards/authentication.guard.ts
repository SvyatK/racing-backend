import { CanActivate, ExecutionContext, Guard, HttpException, HttpStatus } from '@nestjs/common';

@Guard()
export class AuthenticationGuard implements CanActivate {
    constructor() {
    }

    canActivate(req, context: ExecutionContext): boolean {
        if ( req.session && req.session.user ) {
            return true;
        }
        throw new HttpException('Please login first', HttpStatus.UNAUTHORIZED);
    }
}