export default class Environment {
    public static LOBBY_ID: string = process.argv[ 2 ];
    public static PORT: number = +process.argv[ 3 ];
    public static OWNER_ID: string = process.argv[ 4 ];
}