export enum GameState {
    Initializing = 'Initializing',
    WaitingForPlayers = 'WaitingForPlayers',
    LobbyFull = 'LobbyFull',
    Playing = 'Playing',
    Finished = 'Finished',
    Cancelled = 'Cancelled',
    Errored = 'Errored'
}