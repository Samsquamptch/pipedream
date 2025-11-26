"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCancelToken = exports.deleteWithRetryAsync = exports.patchWithRetryAsync = exports.putWithRetryAsync = exports.postWithRetryAsync = exports.getWithRetryAsync = void 0;
const axios_1 = require("axios");
const headers_helper_1 = require("../helpers/headers-helper");
const http_debugger_1 = require("./http.debugger");
const retry_helper_1 = require("../helpers/retry-helper");
function getWithRetryAsync(instance, call, functionsConfig, options) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const retryStrategyOptions = (_a = options === null || options === void 0 ? void 0 : options.retryStrategy) !== null && _a !== void 0 ? _a : retry_helper_1.retryHelper.defaultRetryStrategy;
        return yield runWithRetryAsync({
            retryAttempt: 0,
            url: call.url,
            retryStrategy: retryStrategyOptions,
            functionsConfig: functionsConfig,
            call: (retryAttempt) => __awaiter(this, void 0, void 0, function* () {
                var _b, _c;
                http_debugger_1.httpDebugger.debugStartHttpRequest();
                const axiosResponse = yield instance.get(call.url, {
                    headers: getHeadersJson((_b = options === null || options === void 0 ? void 0 : options.headers) !== null && _b !== void 0 ? _b : [], false),
                    responseType: options === null || options === void 0 ? void 0 : options.responseType,
                    cancelToken: (_c = options === null || options === void 0 ? void 0 : options.cancelToken) === null || _c === void 0 ? void 0 : _c.token
                });
                const response = {
                    data: axiosResponse.data,
                    rawResponse: axiosResponse,
                    headers: (0, headers_helper_1.extractHeadersFromAxiosResponse)(axiosResponse),
                    status: axiosResponse.status,
                    retryStrategy: {
                        options: retryStrategyOptions,
                        retryAttempts: retryAttempt
                    }
                };
                http_debugger_1.httpDebugger.debugSuccessHttpRequest();
                return response;
            })
        });
    });
}
exports.getWithRetryAsync = getWithRetryAsync;
function postWithRetryAsync(instance, call, functionsConfig, options) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const retryStrategyOptions = (_a = options === null || options === void 0 ? void 0 : options.retryStrategy) !== null && _a !== void 0 ? _a : retry_helper_1.retryHelper.defaultRetryStrategy;
        return yield runWithRetryAsync({
            retryAttempt: 0,
            url: call.url,
            retryStrategy: retryStrategyOptions,
            functionsConfig: functionsConfig,
            call: (retryAttempt) => __awaiter(this, void 0, void 0, function* () {
                var _b, _c;
                http_debugger_1.httpDebugger.debugStartHttpRequest();
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
                    headers: (0, headers_helper_1.extractHeadersFromAxiosResponse)(axiosResponse),
                    status: axiosResponse.status,
                    retryStrategy: {
                        options: retryStrategyOptions,
                        retryAttempts: retryAttempt
                    }
                };
                http_debugger_1.httpDebugger.debugSuccessHttpRequest();
                return response;
            })
        });
    });
}
exports.postWithRetryAsync = postWithRetryAsync;
function putWithRetryAsync(instance, call, functionsConfig, options) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const retryStrategyOptions = (_a = options === null || options === void 0 ? void 0 : options.retryStrategy) !== null && _a !== void 0 ? _a : retry_helper_1.retryHelper.defaultRetryStrategy;
        return yield runWithRetryAsync({
            retryAttempt: 0,
            url: call.url,
            retryStrategy: retryStrategyOptions,
            functionsConfig: functionsConfig,
            call: (retryAttempt) => __awaiter(this, void 0, void 0, function* () {
                var _b, _c;
                http_debugger_1.httpDebugger.debugStartHttpRequest();
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
                    headers: (0, headers_helper_1.extractHeadersFromAxiosResponse)(axiosResponse),
                    status: axiosResponse.status,
                    retryStrategy: {
                        options: retryStrategyOptions,
                        retryAttempts: retryAttempt
                    }
                };
                http_debugger_1.httpDebugger.debugSuccessHttpRequest();
                return response;
            })
        });
    });
}
exports.putWithRetryAsync = putWithRetryAsync;
function patchWithRetryAsync(instance, call, functionsConfig, options) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const retryStrategyOptions = (_a = options === null || options === void 0 ? void 0 : options.retryStrategy) !== null && _a !== void 0 ? _a : retry_helper_1.retryHelper.defaultRetryStrategy;
        return yield runWithRetryAsync({
            retryAttempt: 0,
            url: call.url,
            retryStrategy: retryStrategyOptions,
            functionsConfig: functionsConfig,
            call: (retryAttempt) => __awaiter(this, void 0, void 0, function* () {
                var _b, _c;
                http_debugger_1.httpDebugger.debugStartHttpRequest();
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
                    headers: (0, headers_helper_1.extractHeadersFromAxiosResponse)(axiosResponse),
                    status: axiosResponse.status,
                    retryStrategy: {
                        options: retryStrategyOptions,
                        retryAttempts: retryAttempt
                    }
                };
                http_debugger_1.httpDebugger.debugSuccessHttpRequest();
                return response;
            })
        });
    });
}
exports.patchWithRetryAsync = patchWithRetryAsync;
function deleteWithRetryAsync(instance, call, functionsConfig, options) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const retryStrategyOptions = (_a = options === null || options === void 0 ? void 0 : options.retryStrategy) !== null && _a !== void 0 ? _a : retry_helper_1.retryHelper.defaultRetryStrategy;
        return yield runWithRetryAsync({
            retryAttempt: 0,
            url: call.url,
            retryStrategy: retryStrategyOptions,
            functionsConfig: functionsConfig,
            call: (retryAttempt) => __awaiter(this, void 0, void 0, function* () {
                var _b, _c;
                http_debugger_1.httpDebugger.debugStartHttpRequest();
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
                    headers: (0, headers_helper_1.extractHeadersFromAxiosResponse)(axiosResponse),
                    status: axiosResponse.status,
                    retryStrategy: {
                        options: retryStrategyOptions,
                        retryAttempts: retryAttempt
                    }
                };
                http_debugger_1.httpDebugger.debugSuccessHttpRequest();
                return response;
            })
        });
    });
}
exports.deleteWithRetryAsync = deleteWithRetryAsync;
function createCancelToken() {
    let canceler;
    const token = new axios_1.default.CancelToken((c) => {
        // An executor function receives a cancel function as a parameter
        canceler = c;
    });
    return {
        cancel: (cancelMessage) => canceler(`${retry_helper_1.retryHelper.requestCancelledMessagePrefix}: ${cancelMessage !== null && cancelMessage !== void 0 ? cancelMessage : 'User cancel'}`),
        token: token
    };
}
exports.createCancelToken = createCancelToken;
function runWithRetryAsync(data) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield data.call(data.retryAttempt);
        }
        catch (error) {
            const retryResult = retry_helper_1.retryHelper.getRetryErrorResult({
                error: error,
                retryAttempt: data.retryAttempt,
                retryStrategy: data.retryStrategy
            });
            if (retryResult.canRetry) {
                http_debugger_1.httpDebugger.debugRetryHttpRequest();
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