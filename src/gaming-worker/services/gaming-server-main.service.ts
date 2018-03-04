import { Component } from '@nestjs/common';
import { ChildProcessMessage } from '../consts/child-process-message.const';
import Timer = NodeJS.Timer;
import { GameState } from '../../app/business/interfaces/enum/game-state.enum';

@Component()
export class GamingServerMainService {

    private ownerConnectedCounter: Timer;

    private currentState: GameState = GameState.Initializing;

    // TODO use redis pubsub
    constructor() {
    }

    public workerStarted(): void {
        process.send(ChildProcessMessage.SERVER_STARTED);
        this.ownerConnectedCounter = setTimeout(this.reportRaceCancelled, 20000);
    }

    public onOwnerConnected(): void {
        if ( this.ownerConnectedCounter ) {
            clearTimeout(this.ownerConnectedCounter);
            this.reportLobbyReady();
        }
    }

    public reportRaceCancelled(): void {
        this.currentState = GameState.Cancelled;
        process.send(ChildProcessMessage.CANCELLED);
        process.exit(0);
    }

    public reportLobbyReady(): void {
        this.currentState = GameState.WaitingForPlayers;
        process.send(ChildProcessMessage.READY);
    }

    public reportLobbyFull(): void {
        this.currentState = GameState.LobbyFull;
        process.send(ChildProcessMessage.LOBBY_FULL);
    }

    public reportGameStarted(): void {
        this.currentState = GameState.Playing;
        process.send(ChildProcessMessage.GAME_STARTED);
    }

    public reportGameFinished(): void {
        this.currentState = GameState.Finished;
        process.send(ChildProcessMessage.FINISHED);
        process.exit(0);
    }

}
