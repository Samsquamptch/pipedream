import { extractHeadersFromAxiosResponse } from './headers-helper';
export class RetryHelper {
    constructor() {
        this.requestCancelledMessagePrefix = 'Request cancelled';
        this.retryAfterHeaderName = 'Retry-After';
        this.defaultRetryStatusCodes = [408, 429, 500, 502, 503, 504];
        this.defaultRetryStrategy = {
            addJitter: true,
            deltaBackoffMs: 1000,
            maxAttempts: 5,
            canRetryError: (error) => this.canRetryErrorDefault(error)
        };
    }
    getRetryErrorResult(data) {
        var _a, _b, _c;
        if (data.error && data.error.message) {
            if (data.error.message.startsWith(this.requestCancelledMessagePrefix)) {
                // request was cancelled by user, do not retry it
                return {
                    canRetry: false,
                    retryInMs: 0,
                    maxRetries: 0
                };
            }
        }
        const canRetryError = data.retryStrategy.canRetryError
            ? data.retryStrategy.canRetryError(data.error)
            : this.defaultRetryStrategy.canRetryError(data.error);
        if (!canRetryError) {
            // request cannot be retried
            return {
                canRetry: false,
                retryInMs: 0,
                maxRetries: 0
            };
        }
        const maxRetries = ((_a = data.retryStrategy.maxAttempts) !== null && _a !== void 0 ? _a : this.defaultRetryStrategy.maxAttempts);
        const maxRetriesReached = data.retryAttempt >= maxRetries;
        if (maxRetriesReached) {
            // request cannot be retried anymore due to maximum attempts
            return {
                canRetry: false,
                retryInMs: 0,
                maxRetries: maxRetries
            };
        }
        // get wait time
        const retryResult = this.tryGetRetryAfterInMsFromError(data.error);
        if (retryResult) {
            // retry after header was provided
            return {
                canRetry: true,
                retryInMs: retryResult,
                maxRetries: maxRetries
            };
        }
        // wait time was not provided in header
        const waitTimeMs = this.getNextWaitTimeMs((_b = data.retryStrategy.addJitter) !== null && _b !== void 0 ? _b : this.defaultRetryStrategy.addJitter, (_c = data.retryStrategy.deltaBackoffMs) !== null && _c !== void 0 ? _c : this.defaultRetryStrategy.deltaBackoffMs, data.retryAttempt);
        return {
            canRetry: true,
            retryInMs: waitTimeMs,
            maxRetries: maxRetries
        };
    }
    getRetryStrategyFromStrategyOptions(retryOptions) {
        if (!retryOptions) {
            return this.defaultRetryStrategy;
        }
        return retryOptions;
    }
    canRetryInTime(startTime, maxCumulativeWaitTimeMs) {
        const start = startTime.getTime();
        const now = new Date().getTime();
        const differenceInMs = now - start;
        return {
            canRetry: differenceInMs < maxCumulativeWaitTimeMs,
            differenceInMs: differenceInMs
        };
    }
    getNextWaitTimeMs(addJitter, deltaBackoffMs, retryAttempts) {
        if (!addJitter) {
            return deltaBackoffMs * Math.pow(2, retryAttempts);
        }
        const from = 0.8 * deltaBackoffMs;
        const to = 1.2 * deltaBackoffMs * Math.pow(2, retryAttempts);
        return this.randomNumberFromInterval(from, to);
    }
    canRetryErrorDefault(error) {
        const axiosError = this.tryGetAxiosError(error);
        if (!axiosError) {
            // by default non-axios errors are not retried
            return false;
        }
        const statusCode = this.getStatusCodeFromError(error);
        const canRetryStatusCode = this.canRetryStatusCode(statusCode, this.defaultRetryStatusCodes);
        if (canRetryStatusCode) {
            return true;
        }
        return false;
    }
    tryGetRetryAfterInMsFromError(error) {
        const axiosError = this.tryGetAxiosError(error);
        if (!axiosError || !axiosError.response) {
            return undefined;
        }
        const headers = extractHeadersFromAxiosResponse(axiosError.response);
        const retryValueHeader = headers.find((m) => m.header.toLowerCase() === this.retryAfterHeaderName.toLowerCase());
        if (!retryValueHeader) {
            return undefined;
        }
        const retryInSeconds = +retryValueHeader.value;
        return retryInSeconds * 1000;
    }
    canRetryStatusCode(statusCode, useRetryForResponseCodes) {
        return useRetryForResponseCodes.includes(statusCode);
    }
    getStatusCodeFromError(error) {
        const axiosError = this.tryGetAxiosError(error);
        if (!axiosError || !axiosError.response) {
            return 0;
        }
        return axiosError.response.status;
    }
    tryGetAxiosError(error) {
        if (!error) {
            return undefined;
        }
        if (error.isAxiosError) {
            return error;
        }
        const originalError = error.originalError;
        if (originalError && originalError.isAxiosError) {
            return originalError;
        }
        return undefined;
    }
    /**
     * min and max included
     */
    randomNumberFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}
export const retryHelper = new RetryHelper();
//# sourceMappingURL=retry-helper.js.map