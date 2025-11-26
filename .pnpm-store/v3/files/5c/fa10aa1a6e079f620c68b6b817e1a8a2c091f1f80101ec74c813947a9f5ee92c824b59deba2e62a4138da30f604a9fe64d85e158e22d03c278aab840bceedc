var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import axios from 'axios';
import { extractHeadersFromAxiosResponse } from '../helpers/headers-helper';
import { httpDebugger } from './http.debugger';
import { retryHelper } from '../helpers/retry-helper';
export function getWithRetryAsync(instance, call, functionsConfig, options) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const retryStrategyOptions = (_a = options === null || options === void 0 ? void 0 : options.retryStrategy) !== null && _a !== void 0 ? _a : retryHelper.defaultRetryStrategy;
        return yield runWithRetryAsync({
            retryAttempt: 0,
            url: call.url,
            retryStrategy: retryStrategyOptions,
            functionsConfig: functionsConfig,
            call: (retryAttempt) => __awaiter(this, void 0, void 0, function* () {
                var _b, _c;
                httpDebugger.debugStartHttpRequest();
                const axiosResponse = yield instance.get(call.url, {
                    headers: getHeadersJson((_b = options === null || options === void 0 ? void 0 : options.headers) !== null && _b !== void 0 ? _b : [], false),
                    responseType: options === null || options === void 0 ? void 0 : options.responseType,
                    cancelToken: (_c = options === null || options === void 0 ? void 0 : options.cancelToken) === null || _c === void 0 ? void 0 : _c.token
                });
                const response = {
                    data: axiosResponse.data,
                    rawResponse: axiosResponse,
                    headers: extractHeadersFromAxiosResponse(axiosResponse),
                    status: axiosResponse.status,
                    retryStrategy: {
                        options: retryStrategyOptions,
                        retryAttempts: retryAttempt
                    }
                };
                httpDebugger.debugSuccessHttpRequest();
                return response;
            })
        });
    });
}
export function postWithRetryAsync(instance, call, functionsConfig, options) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const retryStrategyOptions = (_a = options === null || options === void 0 ? void 0 : options.retryStrategy) !== null && _a !== void 0 ? _a : retryHelper.defaultRetryStrategy;
        return yield runWithRetryAsync({
            retryAttempt: 0,
            url: call.url,
            retryStrategy: retryStrategyOptions,
            functionsConfig: functionsConfig,
            call: (retryAttempt) => __awaiter(this, void 0, void 0, function* () {
                var _b, _c;
                httpDebugger.debugStartHttpRequest();
                const axiosResponse = yield instance.post(call.url, call.body, {
                    headers: getHeadersJson((_b = options === null || options === void 0 ? void 0 : options.headers) !== null && _b !== void 0 ? _b : [], false),
                    responseType: options === null || options === void 0 ? void 0 : options.responseType,
                    // required for uploading large files
                    // https://github.com/axios/axios/issues/1362
                    maxContentLength: 'Infinity',
                    maxBodyLength: 'Infinity',
                    cancelToken: (_c = options === null || options === void 0 ? void 0 : options.cancelToken) === null || _c === void 0 ? void 0 : _c.token
                });
                const response = {
                    data: axiosResponse.data,
                    rawResponse: axiosResponse,
                    headers: extractHeadersFromAxiosResponse(axiosResponse),
                    status: axiosResponse.status,
                    retryStrategy: {
                        options: retryStrategyOptions,
                        retryAttempts: retryAttempt
                    }
                };
                httpDebugger.debugSuccessHttpRequest();
                return response;
            })
        });
    });
}
export function putWithRetryAsync(instance, call, functionsConfig, options) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const retryStrategyOptions = (_a = options === null || options === void 0 ? void 0 : options.retryStrategy) !== null && _a !== void 0 ? _a : retryHelper.defaultRetryStrategy;
        return yield runWithRetryAsync({
            retryAttempt: 0,
            url: call.url,
            retryStrategy: retryStrategyOptions,
            functionsConfig: functionsConfig,
            call: (retryAttempt) => __awaiter(this, void 0, void 0, function* () {
                var _b, _c;
                httpDebugger.debugStartHttpRequest();
                const axiosResponse = yield instance.put(call.url, call.body, {
                    headers: getHeadersJson((_b = options === null || options === void 0 ? void 0 : options.headers) !== null && _b !== void 0 ? _b : [], false),
                    responseType: options === null || options === void 0 ? void 0 : options.responseType,
                    // required for uploading large files
                    // https://github.com/axios/axios/issues/1362
                    maxContentLength: 'Infinity',
                    maxBodyLength: 'Infinity',
                    cancelToken: (_c = options === null || options === void 0 ? void 0 : options.cancelToken) === null || _c === void 0 ? void 0 : _c.token
                });
                const response = {
                    data: axiosResponse.data,
                    rawResponse: axiosResponse,
                    headers: extractHeadersFromAxiosResponse(axiosResponse),
                    status: axiosResponse.status,
                    retryStrategy: {
                        options: retryStrategyOptions,
                        retryAttempts: retryAttempt
                    }
                };
                httpDebugger.debugSuccessHttpRequest();
                return response;
            })
        });
    });
}
export function patchWithRetryAsync(instance, call, functionsConfig, options) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const retryStrategyOptions = (_a = options === null || options === void 0 ? void 0 : options.retryStrategy) !== null && _a !== void 0 ? _a : retryHelper.defaultRetryStrategy;
        return yield runWithRetryAsync({
            retryAttempt: 0,
            url: call.url,
            retryStrategy: retryStrategyOptions,
            functionsConfig: functionsConfig,
            call: (retryAttempt) => __awaiter(this, void 0, void 0, function* () {
                var _b, _c;
                httpDebugger.debugStartHttpRequest();
                const axiosResponse = yield instance.patch(call.url, call.body, {
                    headers: getHeadersJson((_b = options === null || options === void 0 ? void 0 : options.headers) !== null && _b !== void 0 ? _b : [], false),
                    responseType: options === null || options === void 0 ? void 0 : options.responseType,
                    // required for uploading large files
                    // https://github.com/axios/axios/issues/1362
                    maxContentLength: 'Infinity',
                    maxBodyLength: 'Infinity',
                    cancelToken: (_c = options === null || options === void 0 ? void 0 : options.cancelToken) === null || _c === void 0 ? void 0 : _c.token
                });
                const response = {
                    data: axiosResponse.data,
                    rawResponse: axiosResponse,
                    headers: extractHeadersFromAxiosResponse(axiosResponse),
                    status: axiosResponse.status,
                    retryStrategy: {
                        options: retryStrategyOptions,
                        retryAttempts: retryAttempt
                    }
                };
                httpDebugger.debugSuccessHttpRequest();
                return response;
            })
        });
    });
}
export function deleteWithRetryAsync(instance, call, functionsConfig, options) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const retryStrategyOptions = (_a = options === null || options === void 0 ? void 0 : options.retryStrategy) !== null && _a !== void 0 ? _a : retryHelper.defaultRetryStrategy;
        return yield runWithRetryAsync({
            retryAttempt: 0,
            url: call.url,
            retryStrategy: retryStrategyOptions,
            functionsConfig: functionsConfig,
            call: (retryAttempt) => __awaiter(this, void 0, void 0, function* () {
                var _b, _c;
                httpDebugger.debugStartHttpRequest();
                const axiosResponse = yield instance.delete(call.url, {
                    headers: getHeadersJson((_b = options === null || options === void 0 ? void 0 : options.headers) !== null && _b !== void 0 ? _b : [], false),
                    responseType: options === null || options === void 0 ? void 0 : options.responseType,
                    // required for uploading large files
                    // https://github.com/axios/axios/issues/1362
                    maxContentLength: 'Infinity',
                    maxBodyLength: 'Infinity',
                    cancelToken: (_c = options === null || options === void 0 ? void 0 : options.cancelToken) === null || _c === void 0 ? void 0 : _c.token
                });
                const response = {
                    data: axiosResponse.data,
                    rawResponse: axiosResponse,
                    headers: extractHeadersFromAxiosResponse(axiosResponse),
                    status: axiosResponse.status,
                    retryStrategy: {
                        options: retryStrategyOptions,
                        retryAttempts: retryAttempt
                    }
                };
                httpDebugger.debugSuccessHttpRequest();
                return response;
            })
        });
    });
}
export function createCancelToken() {
    let canceler;
    const token = new axios.CancelToken((c) => {
        // An executor function receives a cancel function as a parameter
        canceler = c;
    });
    return {
        cancel: (cancelMessage) => canceler(`${retryHelper.requestCancelledMessagePrefix}: ${cancelMessage !== null && cancelMessage !== void 0 ? cancelMessage : 'User cancel'}`),
        token: token
    };
}
function runWithRetryAsync(data) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield data.call(data.retryAttempt);
        }
        catch (error) {
            const retryResult = retryHelper.getRetryErrorResult({
                error: error,
                retryAttempt: data.retryAttempt,
                retryStrategy: data.retryStrategy
            });
            if (retryResult.canRetry) {
                httpDebugger.debugRetryHttpRequest();
                // wait time before retrying
                yield new Promise((resolve) => setTimeout(resolve, retryResult.retryInMs));
                if (data.functionsConfig.logErrorsToConsole) {
                    console.warn(`Retry attempt '${data.retryAttempt + 1}' from a maximum of '${retryResult.maxRetries}' retries. Request url: '${data.url}'`);
                }
                // retry request
                return yield runWithRetryAsync({
                    call: data.call,
                    retryStrategy: data.retryStrategy,
                    retryAttempt: data.retryAttempt + 1,
                    url: data.url,
                    functionsConfig: data.functionsConfig
                });
            }
            if (data.functionsConfig.logErrorsToConsole) {
                console.error(`Executing '${data.url}' failed. Request was retried '${data.retryAttempt}' times. `, error);
            }
            throw error;
        }
    });
}
function getHeadersJson(headers, addContentTypeHeader) {
    const headerJson = {};
    headers.forEach((header) => {
        headerJson[header.header] = header.value;
    });
    if (addContentTypeHeader) {
        // add default content type header if not present
        const contentTypeHeader = headers.find((m) => m.header.toLowerCase() === 'Content-Type'.toLowerCase());
        if (!contentTypeHeader) {
            headerJson['Content-Type'] = 'application/json';
        }
    }
    return headerJson;
}
//# sourceMappingURL=http.functions.js.map