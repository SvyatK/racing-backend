export default class GamingWorkerEnvironment {
    public static LOBBY_ID: string = process.argv[ 2 ];
    public static PORT: number = +process.argv[ 3 ];
    public static OWNER_ID: string = process.argv[ 4 ];
}