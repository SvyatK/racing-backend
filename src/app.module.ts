import {MiddlewareConsumer, Module} from '@nestjs/common';
import {AuthService} from './app/services/auth.service';
import {DatabaseModule} from './app/database/database.module';
import {CarController} from './app/controllers/car.controller';
import {CarService} from './app/services/car.service';
import {MapService} from './app/services/map.service';
import {MapController} from './app/controllers/map.controller';
import {CorsMiddleware} from './app/middlewares/cors.middleware';
import {SessionMiddleware} from './app/middlewares/session.middleware';
import {AuthController} from './app/controllers/auth.controller';
import {LobbyService} from './app/services/lobby.service';
import {LobbyController} from './app/controllers/lobby.controller';
import {GamingServersManager} from './app/managers/gaming-servers.manager';
import {ServeStaticMiddleware} from '@nest-middlewares/serve-static';

@Module({
    imports: [
        DatabaseModule
    ],
    controllers: [
        AuthController,
        CarController,
        MapController,
        LobbyController
    ],
    providers: [
        AuthService,
        CarService,
        MapService,
        LobbyService,
        GamingServersManager
    ]
})
export class ApplicationModule {
    configure(consumer: MiddlewareConsumer): void {
        consumer.apply(CorsMiddleware)
                .forRoutes('/');
        consumer.apply(SessionMiddleware)
                .forRoutes('/');
        ServeStaticMiddleware.configure('www');
        consumer.apply(ServeStaticMiddleware)
                .forRoutes('/');
    }
}
