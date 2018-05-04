import { ExceptionFilter, Catch, NotFoundException } from '@nestjs/common';
import { HttpException } from '@nestjs/common';
import * as path from 'path';

@Catch(NotFoundException)
export class NotFoundExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, res) {
        res.sendFile(path.join(__dirname, '../../../../www', 'index.html'))
    }
}