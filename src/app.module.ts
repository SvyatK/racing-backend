import {Module} from '@nestjs/common';
import {AuthService} from './app/services/auth.service';
import {DatabaseModule} from './app/business/database.module';
import {CarController} from './app/controllers/car.controller';
import {CarService} from './app/services/car.service';
import {CorsMiddleware} from './app/middlewares/cors.middleware';
import {SessionMiddleware} from './app/middlewares/session.middleware';
import {AuthController} from './app/controllers/auth.controller';
import {LobbyService} from './app/services/lobby.service';
import {LobbyController} from './app/controllers/lobby.controller';
import {GamingServersManager} from './app/managers/gaming-servers.manager';
import {ServeStaticMiddleware} from '@nest-middlewares/serve-static';
import {MiddlewaresConsumer} from '@nestjs/common/interfaces/middlewares';

@Module({
    imports: [
        DatabaseModule
    ],
    controllers: [
        AuthController,
        CarController,
        LobbyController
    ],
    providers: [
        AuthService,
        CarService,
        LobbyService,
        GamingServersManager
    ]
})
export class ApplicationModule {
    configure(consumer: MiddlewaresConsumer): void {
        consumer.apply(CorsMiddleware)
                .forRoutes('/');
        consumer.apply(SessionMiddleware)
                .forRoutes('/');
        ServeStaticMiddleware.configure('www');
        consumer.apply(ServeStaticMiddleware)
                .forRoutes('/');
    }
}
