import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as express from 'express';
import * as path from 'path';
import * as fs from 'fs';

async function bootstrap() {
    const httpsOptions = {
        key: fs.readFileSync('/etc/letsencrypt/live/racing-demo-dev.pp.ua/privkey.pem'),
        cert: fs.readFileSync('/etc/letsencrypt/live/racing-demo-dev.pp.ua/cert.pem'),
        ca: fs.readFileSync('/etc/letsencrypt/live/racing-demo-dev.pp.ua/chain.pem')
    };

    const expressInstance: express.Express = express();
    expressInstance.use(express.static(path.join(__dirname, '../www')));

    const app = await NestFactory.create(ApplicationModule, expressInstance, { httpsOptions });
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
