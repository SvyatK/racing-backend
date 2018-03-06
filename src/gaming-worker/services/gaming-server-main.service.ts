import { Component } from '@nestjs/common';
import { ChildProcessMessage } from '../consts/child-process-message.const';
import Timer = NodeJS.Timer;
import { GameState } from '../../app/business/interfaces/enum/game-state.enum';

@Component()
export class GamingServerMainService {

    private ownerConnectedCounter: Timer;

    public currentState: GameState = GameState.Initializing;

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
        this.currentState = GameState.Cancelled;
        process.send(ChildProcessMessage.CANCELLED);
        process.exit(0);
    }

    public reportLobbyReady(): void {
        console.log('[WORKER] Lobby ready');
        this.currentState = GameState.WaitingForPlayers;
        process.send(ChildProcessMessage.READY);
    }

    public reportLobbyFull(): void {
        console.log('[WORKER] Lobby full');
        this.currentState = GameState.LobbyFull;
        process.send(ChildProcessMessage.LOBBY_FULL);
    }

    public reportGameStarted(): void {
        console.log('[WORKER] Game started');
        this.currentState = GameState.Playing;
        process.send(ChildProcessMessage.GAME_STARTED);
    }

    public reportGameFinished(): void {
        console.log('[WORKER] Game finished');
        this.currentState = GameState.Finished;
        process.send(ChildProcessMessage.FINISHED);
        process.exit(0);
    }

}
