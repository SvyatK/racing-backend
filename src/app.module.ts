import { MiddlewaresConsumer, Module, RequestMethod } from '@nestjs/common';
import { UserController } from './app/controllers/user.controller';
import { UserService } from './app/services/user.service';
import { DatabaseModule } from './app/business/database.module';
import { CarController } from './app/controllers/car.controller';
import { CarService } from './app/services/car.service';
import { CorsMiddleware } from './app/middlewares/cors.middleware';
import { MainGateway } from './app/gateways/main.gateway';
import { GameplayService } from './app/services/gameplay.service';
import { SessionMiddleware } from './app/middlewares/session.middleware';

@Module({
    imports: [],
    controllers: [
        UserController,
        CarController
    ],
    components: [
        MainGateway,
        UserService,
        CarService,
        GameplayService
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
