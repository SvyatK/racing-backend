import { Component } from '@nestjs/common';

@Component()
export class GamingServersManager {

    private workersMap: Map<number, string>;

    private emptyPortsSet: Set<number>;

    constructor() {
        this.workersMap = new Map<number, string>();
        this.emptyPortsSet = new Set<number>();
        for (let i = 3001; i < 4000; i++) {
            this.emptyPortsSet.add(i);
        }
    }

    public acquirePort(lobbyId: string): number {
        if ( this.emptyPortsSet.size === 0 ) {
            return -1;
        }
        let port: number = this.getRandomEmptyPort();
        console.log(`Port acquired: ${port}`);
        this.emptyPortsSet.delete(port);
        this.workersMap.set(port, lobbyId);
        return port;
    }

    public releasePort(lobbyId: string): void {
        let port: number = +([...this.workersMap].find(([, v]) => v === lobbyId) || [])[0];
        console.log(`Releasing port ${port}`);
        this.workersMap.delete(port);
        this.emptyPortsSet.add(port);
    }

    private getRandomEmptyPort (): number {
        let items: number[] = Array.from(this.emptyPortsSet);
        return items[Math.floor(Math.random() * items.length)];
    }

}