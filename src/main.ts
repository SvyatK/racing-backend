import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as express from 'express';
import * as path from 'path';

async function bootstrap() {
    const expressInstance: express.Express = express();
    expressInstance.use(express.static(path.join(__dirname, '../www')));
    const app = await NestFactory.create(ApplicationModule, expressInstance, {});
    const options = new DocumentBuilder()
        .setTitle('Racing Backend')
        .setDescription('The racing backend API description')
        .setVersion('1.0')
        .addTag('race')
        .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('/api', app, document);
    // TODO fix env variables
    await app.listen(/*+process.env.PORT || */3000);
}

bootstrap();
