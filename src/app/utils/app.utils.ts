export class AppUtils {

    static async wait(ms: number, isResolve: boolean = true): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            setTimeout(
                () => {
                    if ( isResolve ) {
                        resolve();
                    } else {
                        reject('Rejected by timeout');
                    }
                },
                ms
            );
        });
    }

    static async doWithFailTimeout<T>(promise: Promise<T>, timeout: number): Promise<T> {
        return Promise.race([
            promise,
            AppUtils.wait(timeout, false) as Promise<any>
        ]);
    }

    static isInDebugMode(): boolean {
        return typeof global.v8debug === 'object' || /--debug|--inspect/.test(process.execArgv.join(' '));
    }

}
