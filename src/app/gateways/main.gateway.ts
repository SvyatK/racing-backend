import { OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { GameplayService } from '../services/gameplay.service';

@WebSocketGateway()
export class MainGateway implements OnGatewayConnection, OnGatewayDisconnect {

    //TODO move all logic to service!!!
    private items: any[] = [];
    private roomCount: number = 0;
    private startCoordinates: any[];

    @WebSocketServer()
    private io: SocketIO.Server;

    constructor(private readonly gameplayService: GameplayService) {
    }

    public handleConnection(socket: SocketIO.Socket): void {
        this.gameplayService.clientConnected(this.io, socket)
            .then();
    }

    public handleDisconnect(socket: SocketIO.Socket): void {
        this.gameplayService.clientDisconnected(this.io, socket)
            .then();
    }

    // TODO data type
    @SubscribeMessage('readyToStart')
    onReadyToStart(socket: SocketIO.Socket, data: any): void {
        this.gameplayService.playerReadyToStart(this.io, socket, data)
            .then();
    }

    @SubscribeMessage('nextStep')
    onNextStep(socket: SocketIO.Socket, data: any): void {
        this.gameplayService.nextStep(this.io, socket, data)
            .then();
    }

    @SubscribeMessage('finished')
    onFinished(socket: SocketIO.Socket, data: any): void {
        this.gameplayService.playerFinished(this.io, socket, data)
            .then();
    }

}