import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as express from 'express';
import * as fs from 'fs';
import { APP_CONFIG } from './app/conf/config';
import { NestApplicationOptions } from '@nestjs/common/interfaces/nest-application-options.interface';
import { ValidationPipe } from '@nestjs/common';
import { NotFoundExceptionFilter } from './app/middlewares/filters/not-found-exception.filter';

async function bootstrap() {
    console.log(`Starting app. Environment: ${APP_CONFIG.env}`);
    let appOptions: NestApplicationOptions = {};
    if ( APP_CONFIG.server.useSSL ) {
        appOptions.httpsOptions = {
            key: fs.readFileSync(APP_CONFIG.server.ssl.key),
            cert: fs.readFileSync(APP_CONFIG.server.ssl.cert),
            ca: fs.readFileSync(APP_CONFIG.server.ssl.ca)
        };
    }
    const app = await NestFactory.create(ApplicationModule, express(), appOptions);
    app.useGlobalPipes(new ValidationPipe());
    app.useGlobalFilters(new NotFoundExceptionFilter());
    const options = new DocumentBuilder()
        .setTitle('Racing Backend')
        .setDescription('The racing backend API description')
        .setVersion('1.0')
        .setSchemes(APP_CONFIG.server.useSSL ? 'https' : 'http')
        .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('/api', app, document);
    await app.listen(APP_CONFIG.server.port);
}

bootstrap();
