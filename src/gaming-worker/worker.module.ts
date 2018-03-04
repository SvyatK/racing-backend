import { MiddlewaresConsumer, Module } from '@nestjs/common';
import { MainGateway } from './gateways/main.gateway';
import { GameplayService } from './services/gameplay.service';
import { GamingServerMainService } from './services/gaming-server-main.service';

@Module({
    imports: [],
    controllers: [],
    components: [
        MainGateway,
        GameplayService,
        GamingServerMainService
    ],
    modules: []
})
export class WorkerModule {
    configure(consumer: MiddlewaresConsumer): void {
    }
}
