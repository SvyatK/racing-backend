import {Injectable} from '@nestjs/common';
import {ChildProcessMessage} from '../consts/child-process-message.const';
import Timer = NodeJS.Timer;

@Injectable()
export class GamingServerMainService {

    private ownerConnectedCounter: Timer;

    // TODO use redis pubsub
    constructor() {
    }

    public workerStarted(): void {
        process.send(ChildProcessMessage.SERVER_STARTED);
        this.ownerConnectedCounter = setTimeout(this.reportRaceCancelled, 20000);
    }

    public onOwnerConnected(): void {
        if ( this.ownerConnectedCounter ) {
            console.log('[WORKER] owner connected; clearing fail timeout');
            clearTimeout(this.ownerConnectedCounter);
            this.reportLobbyReady();
        }
    }

    public reportRaceCancelled(): void {
        console.log('[WORKER] Race cancelled');
        process.send(ChildProcessMessage.CANCELLED);
        process.exit(0);
    }

    public reportLobbyReady(): void {
        console.log('[WORKER] Lobby ready');
        process.send(ChildProcessMessage.READY);
    }

    public reportLobbyFull(): void {
        console.log('[WORKER] Lobby full');
        process.send(ChildProcessMessage.LOBBY_FULL);
    }

    public reportGameStarted(): void {
        console.log('[WORKER] Game started');
        process.send(ChildProcessMessage.GAME_STARTED);
    }

    public reportGameFinished(): void {
        console.log('[WORKER] Game finished');
        process.send(ChildProcessMessage.FINISHED);
        process.exit(0);
    }

}
