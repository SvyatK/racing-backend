import { WorkerModule } from './worker.module';
import { NestApplication, NestFactory } from '@nestjs/core';
import Environment from './environment';
import { GamingServerMainService } from './services/gaming-server-main.service';
import * as fs from "fs";
import * as express from 'express';
import * as https from "https";
import * as http from "http";

async function bootstrap() {
    const sslOptions = {
        key: fs.readFileSync('/etc/letsencrypt/live/racing-demo-dev.pp.ua/privkey.pem'),
        cert: fs.readFileSync('/etc/letsencrypt/live/racing-demo-dev.pp.ua/cert.pem'),
        ca: fs.readFileSync('/etc/letsencrypt/live/racing-demo-dev.pp.ua/chain.pem')
    };
    const expressInstance: express.Express = express();
    const app: NestApplication = await NestFactory.create(WorkerModule, expressInstance, {});
    await app.init();
    await https.createServer(sslOptions, expressInstance).listen(Environment.PORT);
    await http.createServer(expressInstance).listen(Environment.PORT + 1000);
    const gamingServerMainService: GamingServerMainService = app.get('GamingServerMainService');
    gamingServerMainService.workerStarted();
}

bootstrap();
