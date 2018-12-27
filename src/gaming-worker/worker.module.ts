import {Module} from '@nestjs/common';
import {MainGateway} from './gateways/main.gateway';
import {GameplayService} from './services/gameplay.service';
import {GamingServerMainService} from './services/gaming-server-main.service';
import {MiddlewaresConsumer} from '@nestjs/common/interfaces/middlewares';

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
    configure(consumer: MiddlewaresConsumer): void {
    }
}
