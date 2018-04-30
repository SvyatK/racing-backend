import { WorkerModule } from './worker.module';
import { NestApplication, NestFactory } from '@nestjs/core';
import { GamingServerMainService } from './services/gaming-server-main.service';
import * as fs from 'fs';
import * as express from 'express';
import GamingWorkerEnvironment from './gaming-worker-environment';
import { APP_CONFIG } from '../app/conf/config';
import { NestApplicationOptions } from '@nestjs/common/interfaces/nest-application-options.interface';

async function bootstrap() {
    console.log(`Starting gaming worker. Global environment: ${APP_CONFIG.env}. Port: ${GamingWorkerEnvironment.PORT}. Players: ${GamingWorkerEnvironment.PLAYERS_COUNT}`);
    let appOptions: NestApplicationOptions = {};
    if ( APP_CONFIG.server.useSSL ) {
        appOptions.httpsOptions = {
            key: fs.readFileSync(APP_CONFIG.server.ssl.key),
            cert: fs.readFileSync(APP_CONFIG.server.ssl.cert),
            ca: fs.readFileSync(APP_CONFIG.server.ssl.ca)
        };
    }
    const expressInstance: express.Express = express();
    const app: NestApplication = await NestFactory.create(WorkerModule, expressInstance, appOptions);
    await app.listen(GamingWorkerEnvironment.PORT);

    const gamingServerMainService: GamingServerMainService = app.get('GamingServerMainService');
    gamingServerMainService.workerStarted();
}

bootstrap();
