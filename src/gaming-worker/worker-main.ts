import { WorkerModule } from './worker.module';
import { NestFactory } from '@nestjs/core';
import { ChildProcessMessage } from './consts/child-process-message.const';

async function bootstrap() {
    const lobbyId: string = process.argv[ 2 ];
    const port: number = +process.argv[ 3 ];

    const app = await NestFactory.create(WorkerModule);
    await app.listen(port);

    console.log(`Gaming server. Lobby id: ${lobbyId}; port: ${port}`);

    process.send(ChildProcessMessage.STARTED);

    setTimeout(()=> {
        process.exit(0);
    }, 10000)
}

bootstrap();
