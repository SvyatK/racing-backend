import { MiddlewaresConsumer, Module, RequestMethod } from '@nestjs/common';
import { AuthService } from './app/services/auth.service';
import { DatabaseModule } from './app/business/database.module';
import { CarController } from './app/controllers/car.controller';
import { CarService } from './app/services/car.service';
import { CorsMiddleware } from './app/middlewares/cors.middleware';
import { GameplayService } from './app/services/gameplay.service';
import { SessionMiddleware } from './app/middlewares/session.middleware';
import { AuthController } from './app/controllers/auth.controller';
import { LobbyService } from './app/services/lobby.service';
import { LobbyController } from './app/controllers/lobby.controller';
import { GamingServersManager } from './app/managers/gaming-servers.manager';
import { MainGateway } from './gaming-worker/gateways/main.gateway';

@Module({
    imports: [],
    controllers: [
        AuthController,
        CarController,
        LobbyController
    ],
    components: [
        MainGateway, // TODO remove from main node
        AuthService,
        CarService,
        LobbyService,
        GameplayService, // TODO remove from main node
        GamingServersManager
    ],
    modules: [
        DatabaseModule
    ]
})
export class ApplicationModule {
    configure(consumer: MiddlewaresConsumer): void {
        consumer.apply(CorsMiddleware)
                .forRoutes({
                    path: '*',
                    method: RequestMethod.ALL
                });
        consumer.apply(SessionMiddleware)
                .forRoutes({
                    path: '*',
                    method: RequestMethod.ALL
                });
    }
}
