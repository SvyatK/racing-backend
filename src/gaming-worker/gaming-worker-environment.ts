export default class GamingWorkerEnvironment {
    public static LOBBY_ID: number = +process.argv[2];
    public static PORT: number = +process.argv[ 3 ];
    public static OWNER_ID: number = +process.argv[4];
    public static PLAYERS_COUNT: number = +process.argv[ 5 ];
}