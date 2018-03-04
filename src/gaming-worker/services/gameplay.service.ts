import { Component } from '@nestjs/common';
import { OwnUserDataDTO } from '../../app/dto/responses/own-user-data.dto';
import { GamingServerMainService } from './gaming-server-main.service';
import Environment from '../environment';

@Component()
export class GameplayService {

    // TODO types
    private items: any[] = [];
    private startCoordinates: { x: number, y: number, rot: number }[] = [ {
        x: 1056,
        y: -239,
        rot: 1.49
    }, {
        x: 1127,
        y: -244,
        rot: 1.49
    }
    ];

    constructor(private readonly gamingServerMainService: GamingServerMainService) {
    }

    async clientConnected(io: SocketIO.Server, socket: SocketIO.Socket): Promise<void> {
        const user: OwnUserDataDTO = socket.client.request.session.user;
        if ( user._id === Environment.OWNER_ID ) {
            this.gamingServerMainService.onOwnerConnected();
        }
        console.log(`Client '${user.login}' connected via socket connection ${socket.client.id}`);
        // this.gamingServerMainService.reportLobbyFull();
        // TODO ^^
    }

    async clientDisconnected(io: SocketIO.Server, socket: SocketIO.Socket): Promise<void> {
        const user: OwnUserDataDTO = socket.client.request.session.user;
        console.log(`Client '${user.login}' disconnected (socket connection ${socket.client.id})`);
    }

    // TODO data type
    async playerReadyToStart(io: SocketIO.Server, socket: SocketIO.Socket, data: any): Promise<void> {
        console.log(`${socket.id} ready to start`);
        const item = {
            id: data.id,
            x: this.startCoordinates[ this.items.length % 2 == 0 ? 0 : 1 ].x,
            y: this.startCoordinates[ this.items.length % 2 ? 0 : 1 ].y,
            rotation: this.startCoordinates[ this.items.length % 2 ? 0 : 1 ].rot,
            name: data.name
        };
        const container = {
            item: item,
            ready: false,
            finished: false
        };
        this.items.push(container);
        if ( this.items.length === 2 ) {
            this.gamingServerMainService.reportGameStarted();
            this.update(io, container);
        }
    }

    async nextStep(io: SocketIO.Server, socket: SocketIO.Socket, data: any): Promise<void> {
        let clientsReady = 0;
        let currentContainer;
        //replace item data
        for (let i = 0; i < this.items.length; i++) {
            let container = this.items[ i ];
            if ( data.id == container.item.id ) {
                this.items[ i ].item = data;
                this.items[ i ].ready = true;
                currentContainer = container;
            }
        }
        //get ready items
        for (let j = 0; j < this.items.length; j++) {
            let readyContainer = this.items[ j ];
            if ( readyContainer.roomId == currentContainer.roomId && readyContainer.ready ) {
                clientsReady++;
            }
        }
        if ( clientsReady >= 2 ) {
            //setting ready false
            for (let k = 0; k < this.items.length; k++) {
                let readyContainer = this.items[ k ];
                if ( readyContainer.roomId == currentContainer.roomId ) {
                    readyContainer.ready = false;
                }
            }
            this.update(io, currentContainer);
        }
    }

    async playerFinished(io: SocketIO.Server, socket: SocketIO.Socket, data: any): Promise<void> {
        console.log(`${socket.id} finished`);
        io.sockets.emit('raceFinished', data.id);
        this.gamingServerMainService.reportGameFinished();
    }

    // TODO types
    private update(io: SocketIO.Server, itemData: any): void {
        const itemsToSend = this.items.map(currentContainer => currentContainer.item);
        if ( itemsToSend.length >= 2 ) {
            io.sockets.emit('stepComplete', itemsToSend);
        }
    }
}