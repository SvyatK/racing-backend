export default class LobbySettingsModel {

    constructor(
        public map: string = 'default',
        public slotsCount: number = 4,
        public moveTimeout: number = 7000.
    ) {
    }

}
