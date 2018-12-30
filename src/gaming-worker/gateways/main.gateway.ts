import {OnGatewayConnection, OnGatewayDisconnect, WebSocketGateway, WebSocketServer} from '@nestjs/websockets';
import {SocketSessionMiddleware} from '../../app/middlewares/session.middleware';
import {GameplayService} from '../services/gameplay.service';
import {CarDataDTO} from '../../app/dto/responses/car-data.dto';
import {SubscribeMessageWithAck} from 'nestjs-socket-handlers-with-ack/dist';
import StepDataModel from '../models/step-data.model';

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

    @SubscribeMessageWithAck('loadingStateChanged')
    loadingStateChanged(socket: SocketIO.Socket, isLoading: boolean): void {
        this.gameplayService.loadingStateChanged(this.io, socket, isLoading)
            .then();
    }

    @SubscribeMessageWithAck('readyToStart')
    readyToStart(socket: SocketIO.Socket): void {
        this.gameplayService.playerReadyToStart(this.io, socket)
            .then();
    }

    @SubscribeMessageWithAck('nextStep')
    nextStep(socket: SocketIO.Socket, step: StepDataModel): void {
        this.gameplayService.nextStep(this.io, socket, step)
            .then();
    }

    @SubscribeMessageWithAck('finished')
    finished(socket: SocketIO.Socket, data: any): void {
        this.gameplayService.playerFinished(this.io, socket, data)
            .then();
    }

}