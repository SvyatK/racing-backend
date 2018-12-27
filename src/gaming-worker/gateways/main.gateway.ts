import {OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, WebSocketGateway, WebSocketServer} from '@nestjs/websockets';
import {SocketSessionMiddleware} from '../../app/middlewares/session.middleware';
import {GameplayService} from '../services/gameplay.service';
import StepDataDto from '../dto/step-data.dto';
import {CarDataDTO} from '../../app/dto/responses/car-data.dto';
import {SubscribeMessageWithAck} from 'nestjs-socket-handlers-with-ack/dist';

@WebSocketGateway({
    middlewares: [ SocketSessionMiddleware ]
})
export class MainGateway implements OnGatewayConnection, OnGatewayDisconnect {

    @WebSocketServer()
    private io: SocketIO.Server;

    constructor(private readonly gameplayService: GameplayService) {
    }

    public handleConnection(socket: SocketIO.Socket): void {
        new SocketSessionMiddleware().resolve()(socket, () => {
            this.gameplayService.clientConnected(this.io, socket)
                .then();
        });
    }

    public handleDisconnect(socket: SocketIO.Socket): void {
        this.gameplayService.clientDisconnected(this.io, socket)
            .then();
    }

    @SubscribeMessageWithAck('takeSlot')
    async takeSlot(socket: SocketIO.Socket, slotIndex: number): Promise<boolean> {
        return this.gameplayService.takeSlot(this.io, socket, slotIndex);
    }

    @SubscribeMessageWithAck('selectCar')
    async selectCar(socket: SocketIO.Socket, carData: CarDataDTO): Promise<boolean> {
        return this.gameplayService.selectCar(this.io, socket, carData);
    }

    // TODO data type
    @SubscribeMessage('readyToStart')
    readyToStart(socket: SocketIO.Socket): void {
        this.gameplayService.playerReadyToStart(this.io, socket)
            .then();
    }

    @SubscribeMessageWithAck('nextStep')
    nextStep(socket: SocketIO.Socket, data: StepDataDto): void {
        this.gameplayService.nextStep(this.io, socket, data)
            .then();
    }

    @SubscribeMessage('finished')
    finished(socket: SocketIO.Socket, data: any): void {
        this.gameplayService.playerFinished(this.io, socket, data)
            .then();
    }

}