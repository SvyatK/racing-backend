import {MiddlewareConsumer, Module} from '@nestjs/common';
import {MainGateway} from './gateways/main.gateway';
import {GameplayService} from './services/gameplay.service';
import {GamingServerMainService} from './services/gaming-server-main.service';

@Module({
    imports: [],
    controllers: [],
    providers: [
        MainGateway,
        GameplayService,
        GamingServerMainService
    ]
})
export class WorkerModule {
    configure(consumer: MiddlewareConsumer): void {
    }
}
