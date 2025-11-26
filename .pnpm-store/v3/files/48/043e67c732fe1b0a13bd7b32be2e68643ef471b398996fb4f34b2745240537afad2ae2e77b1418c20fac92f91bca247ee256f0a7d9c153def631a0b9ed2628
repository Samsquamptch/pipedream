var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { headerHelper, urlHelper } from '@kontent-ai/core-sdk';
import { SharedModels } from '../models';
import { getType } from 'mime';
export class BaseManagementQueryService {
    constructor(config, httpService, sdkInfo) {
        this.config = config;
        this.httpService = httpService;
        this.sdkInfo = sdkInfo;
        /**
         * Default base url for content management API
         */
        this.defaultBaseCMUrl = 'https://manage.kontent.ai/v2';
    }
    /**
     * Gets url based on the action, query configuration and options (parameters)
     * @param action Action (= url part) that will be hit
     * @param options Query options
     * @param addSlash Indicates if slash is added to query
     */
    getFullUrl(action, options, addSlash = true) {
        return urlHelper.addOptionsToUrl(this.getBaseUrl() + (addSlash ? '/' : '') + action, options);
    }
    /**
     * Gets proper set of headers for given request.
     * @param config Query config
     */
    getHeaders(config) {
        const headers = [
            // sdk tracking header
            headerHelper.getSdkIdHeader({
                host: this.sdkInfo.host,
                name: this.sdkInfo.name,
                version: this.sdkInfo.version
            }),
            // add authorization header
            this.getAuthorizationHeader()
        ];
        // add query headers
        headers.push(...config.headers);
        return headers;
    }
    /**
     * Http PATCH response
     * @param url Url of request
     * @param config Query configuration
     */
    patchResponseAsync(url, body, internalConfig, config) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.httpService.patchAsync({
                    url: url,
                    body: body
                }, {
                    cancelToken: config.cancelTokenRequest,
                    retryStrategy: this.config.retryStrategy,
                    headers: this.getHeaders(config),
                    responseType: internalConfig && internalConfig.responseType ? internalConfig.responseType : undefined
                });
            }
            catch (error) {
                throw this.mapContentManagementError(error);
            }
        });
    }
    /**
     * Http GET response
     * @param url Url of request
     * @param config Query configuration
     */
    getResponseAsync(url, internalConfig, config) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.httpService.getAsync({
                    url: url
                }, {
                    cancelToken: config.cancelTokenRequest,
                    retryStrategy: this.config.retryStrategy,
                    headers: this.getHeaders(config),
                    responseType: internalConfig && internalConfig.responseType ? internalConfig.responseType : undefined
                });
            }
            catch (err) {
                throw this.mapContentManagementError(err);
            }
        });
    }
    /**
     * Http POST response
     * @param url Url of request
     * @param body Body of the request (names and values)
     * @param config Query configuration
     */
    postResponseAsync(url, body, internalConfig, config) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.httpService.postAsync({
                    url: url,
                    body: body
                }, {
                    cancelToken: config.cancelTokenRequest,
                    retryStrategy: this.config.retryStrategy,
                    headers: this.getHeaders(config),
                    responseType: internalConfig && internalConfig.responseType ? internalConfig.responseType : undefined
                });
            }
            catch (err) {
                throw this.mapContentManagementError(err);
            }
        });
    }
    /**
     * Http PUT response
     * @param url Url of request
     * @param body Body of the request (names and values)
     * @param config Query configuration
     */
    putResponseAsync(url, body, internalConfig, config) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.httpService.putAsync({
                    url: url,
                    body: body
                }, {
                    cancelToken: config.cancelTokenRequest,
                    retryStrategy: this.config.retryStrategy,
                    headers: this.getHeaders(config),
                    responseType: internalConfig && internalConfig.responseType ? internalConfig.responseType : undefined
                });
            }
            catch (err) {
                throw this.mapContentManagementError(err);
            }
        });
    }
    /**
     * Http Delete response
     * @param url Url of request
     * @param body Body of the request (names and values)
     * @param config Query configuration
     */
    deleteResponseAsync(url, internalConfig, config) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.httpService.deleteAsync({
                    url: url
                }, {
                    cancelToken: config.cancelTokenRequest,
                    retryStrategy: this.config.retryStrategy,
                    headers: this.getHeaders(config),
                    responseType: internalConfig && internalConfig.responseType ? internalConfig.responseType : undefined
                });
            }
            catch (err) {
                throw this.mapContentManagementError(err);
            }
        });
    }
    getBinaryDataFromUrlAsync(url) {
        return __awaiter(this, void 0, void 0, function* () {
            // temp fix for repository not validating url
            url = url.replace('#', '%23');
            const response = yield this.httpService.getAsync({
                url: url
            }, {
                responseType: 'arraybuffer'
            });
            return response.data;
        });
    }
    getMimeTypeFromFilename(filename) {
        return getType(filename);
    }
    mapContentManagementError(error) {
        var _a;
        let axiosError;
        if (error.error) {
            axiosError = error.error;
        }
        else {
            axiosError = error;
        }
        if (!axiosError || !axiosError.isAxiosError) {
            return error;
        }
        const cmError = (_a = axiosError.response) === null || _a === void 0 ? void 0 : _a.data;
        if ((cmError === null || cmError === void 0 ? void 0 : cmError.error_code) || (cmError === null || cmError === void 0 ? void 0 : cmError.request_id)) {
            const validationErrors = [];
            if (cmError.validation_errors) {
                validationErrors.push(...cmError.validation_errors.map((validationErrorRaw) => new SharedModels.ValidationError({
                    message: validationErrorRaw.message
                })));
            }
            return new SharedModels.ContentManagementBaseKontentError({
                errorCode: cmError.error_code,
                message: cmError.message,
                originalError: error,
                requestId: cmError.request_id,
                validationErrors: validationErrors
            });
        }
        return error;
    }
    /**
     * Gets authorization header
     */
    getAuthorizationHeader() {
        const key = this.config.apiKey;
        if (!key) {
            throw Error(`Cannot get authorization header for query type because API Key is undefined`);
        }
        return {
            header: 'authorization',
            value: `bearer ${key}`
        };
    }
    /**
     * Gets base URL of the request including the project Id
     */
    getBaseUrl() {
        if (this.config.baseUrl) {
            return this.config.baseUrl;
        }
        return this.defaultBaseCMUrl;
    }
}
//# sourceMappingURL=base-management-service.class.js.map