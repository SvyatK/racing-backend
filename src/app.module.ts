import { MiddlewaresConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserController } from './app/controllers/user.controller';
import { UserService } from './app/services/user.service';
import { DatabaseModule } from './app/business/database.module';
import { CarController } from './app/controllers/car.controller';
import { CarService } from './app/services/car.service';
import { CorsMiddleware } from './app/middlewares/cors.middleware';
import { MainGateway } from './app/gateways/main.gateway';
import { GameplayService } from './app/services/gameplay.service';

@Module({
    imports: [],
    controllers: [
        AppController,
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
    }
}