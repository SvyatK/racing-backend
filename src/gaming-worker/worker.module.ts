import { MiddlewaresConsumer, Module } from '@nestjs/common';
import { MainGateway } from './gateways/main.gateway';
import { GameplayService } from '../app/services/gameplay.service';

@Module({
    imports: [],
    controllers: [],
    components: [
        MainGateway,
        GameplayService
    ],
    modules: []
})
export class WorkerModule {
    configure(consumer: MiddlewaresConsumer): void {
    }
}
