import { WorkerModule } from './worker.module';
import { NestApplication, NestFactory } from '@nestjs/core';
import Environment from './environment';
import { GamingServerMainService } from './services/gaming-server-main.service';
import * as fs from 'fs';
import * as express from 'express';

async function bootstrap() {
    const httpsOptions = {
        key: fs.readFileSync('/etc/letsencrypt/live/racing-demo-dev.pp.ua/privkey.pem'),
        cert: fs.readFileSync('/etc/letsencrypt/live/racing-demo-dev.pp.ua/cert.pem'),
        ca: fs.readFileSync('/etc/letsencrypt/live/racing-demo-dev.pp.ua/chain.pem')
    };
    const expressInstance: express.Express = express();

    const app: NestApplication = await NestFactory.create(WorkerModule, expressInstance, { httpsOptions });
    await app.listen(Environment.PORT);

    const gamingServerMainService: GamingServerMainService = app.get('GamingServerMainService');
    gamingServerMainService.workerStarted();
}

bootstrap();
