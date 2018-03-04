import { WorkerModule } from './worker.module';
import { NestApplication, NestFactory } from '@nestjs/core';
import Environment from './environment';
import { GamingServerMainService } from './services/gaming-server-main.service';

async function bootstrap() {

    const app: NestApplication = await NestFactory.create(WorkerModule);
    await app.listen(Environment.PORT);
    const gamingServerMainService: GamingServerMainService = app.get('GamingServerMainService');
    gamingServerMainService.workerStarted();
}

bootstrap();
