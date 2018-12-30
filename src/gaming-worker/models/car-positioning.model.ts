export default class CarPositioningModel {

    constructor(
        public position: {x: number, y: number} = {
            x: 0,
            y: 0
        },
        public rotation: number = 0,
        public speed: number = 0,
    ) {
    }

}
