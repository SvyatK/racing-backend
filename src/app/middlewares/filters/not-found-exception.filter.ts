import {Catch, ExceptionFilter, HttpException, NotFoundException} from '@nestjs/common';
import * as path from 'path';
import {ExecutionContextHost} from '@nestjs/core/helpers/execution-context.host';

@Catch(NotFoundException)
export class NotFoundExceptionFilter implements ExceptionFilter<HttpException> {
    catch(exception: HttpException, host: ExecutionContextHost) {
        const res = host.getArgs()[1];
        res.sendFile(path.join(__dirname, '../../../../www', 'index.html'))
    }
}