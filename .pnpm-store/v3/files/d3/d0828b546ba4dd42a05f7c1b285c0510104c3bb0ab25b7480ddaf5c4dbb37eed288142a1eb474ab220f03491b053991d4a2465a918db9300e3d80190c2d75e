import { IRetryStrategyOptions } from '../http/http.models';
export declare class RetryHelper {
    readonly requestCancelledMessagePrefix: string;
    readonly retryAfterHeaderName: string;
    readonly defaultRetryStatusCodes: number[];
    readonly defaultRetryStrategy: {
        addJitter: boolean;
        deltaBackoffMs: number;
        maxAttempts: number;
        canRetryError: (error: any) => boolean;
    };
    getRetryErrorResult(data: {
        retryAttempt: number;
        error: any;
        retryStrategy: IRetryStrategyOptions;
    }): {
        retryInMs: number;
        canRetry: boolean;
        maxRetries: number;
    };
    getRetryStrategyFromStrategyOptions(retryOptions?: IRetryStrategyOptions): IRetryStrategyOptions;
    canRetryInTime(startTime: Date, maxCumulativeWaitTimeMs: number): {
        canRetry: boolean;
        differenceInMs: number;
    };
    private getNextWaitTimeMs;
    private canRetryErrorDefault;
    private tryGetRetryAfterInMsFromError;
    private canRetryStatusCode;
    private getStatusCodeFromError;
    private tryGetAxiosError;
    /**
     * min and max included
     */
    private randomNumberFromInterval;
}
export declare const retryHelper: RetryHelper;
