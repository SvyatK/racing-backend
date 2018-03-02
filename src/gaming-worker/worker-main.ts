import { WorkerModule } from './worker.module';
import { NestFactory } from '@nestjs/core';

async function bootstrap() {
    const lobbyId: string = process.argv[ 2 ];
    const port: number = +process.argv[ 3 ];

    const app = await NestFactory.create(WorkerModule);
    await app.listen(port);

    console.log(`Worker started. Lobby id: ${lobbyId}; port: ${port}`);

    process.send(`Ready`);

    setTimeout(()=> {
        process.exit(0);
    }, 10000)
}

bootstrap();
