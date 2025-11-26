var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { urlHelper } from '@kontent-ai/core-sdk';
import { waitForLoadingNewContentHeader, DeliveryError, sdkVersionHeader, staleContentHeaderName, continuationTokenHeaderName } from '../models';
export class BaseDeliveryQueryService {
    constructor(
    /**
     * Delivery client configuration
     */
    config, 
    /**
     * Http service for fetching data
     */
    httpService, 
    /**
     * Information about the SDK
     */
    sdkInfo, 
    /**
     * Mapping service
     */
    mappingService) {
        this.config = config;
        this.httpService = httpService;
        this.sdkInfo = sdkInfo;
        this.mappingService = mappingService;
        /**
         * Default base Url to Kontent.ai Delivery API
         */
        this.defaultBaseDeliveryApiUrl = 'https://deliver.kontent.ai';
        /**
         * Default preview url to Kontent.ai Delivery API
         */
        this.defaultPreviewDeliveryApiUrl = 'https://preview-deliver.kontent.ai';
    }
    /**
     * Gets url based on the action, query configuration and options (parameters)
     * @param action Action (= url part) that will be hit
     * @param queryConfig Query configuration
     * @param options Query options
     */
    getUrl(action, queryConfig, options) {
        if (!this.config.proxy || !this.config.proxy.advancedProxyUrlResolver) {
            return urlHelper.addOptionsToUrl(this.getBaseUrl(queryConfig) + action, options);
        }
        return this.config.proxy.advancedProxyUrlResolver({
            queryParameters: options ? options : [],
            queryString: urlHelper.addOptionsToUrl('', options),
            action: action,
            domain: this.getDomain(queryConfig),
            queryConfig: queryConfig,
            environmentId: this.config.environmentId
        });
    }
    /**
     * Gets proper set of headers for given request.
     * @param queryConfig Query configuration
     * @param additionalHeaders Custom headers
     */
    getHeaders(queryConfig, additionalHeaders) {
        const headers = [];
        if (additionalHeaders) {
            headers.push(...additionalHeaders);
        }
        // add SDK Id header for monitoring SDK usage
        headers.push(this.getSdkIdHeader());
        // add headers from global config
        if (this.config.globalHeaders) {
            headers.push(...this.config.globalHeaders(queryConfig));
        }
        // add query / global headers from query config
        headers.push(...this.getQueryHeaders(queryConfig));
        if (this.isPreviewModeEnabled(queryConfig) && this.isSecuredModeEnabled(queryConfig)) {
            throw Error(`Preview & secured modes cannot be used at the same time.`);
        }
        // add preview header is required
        if (this.isPreviewModeEnabled(queryConfig) && this.config.previewApiKey) {
            headers.push(this.getAuthorizationHeader(this.config.previewApiKey));
        }
        // add secured mode header is required
        if (this.isSecuredModeEnabled(queryConfig) && this.config.secureApiKey) {
            headers.push(this.getAuthorizationHeader(this.config.secureApiKey));
        }
        // add 'X-KC-Wait-For-Loading-New-Content' header if required
        if (this.shouldAddWaitForLoadingNewContentHeader(queryConfig)) {
            headers.push({
                header: waitForLoadingNewContentHeader,
                value: 'true'
            });
        }
        return headers;
    }
    /**
     * Http POST response
     * @param url Url of request
     * @param queryConfig Query config configuration
     */
    postResponseAsync(url, body, queryConfig, serviceConfig) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!queryConfig) {
                queryConfig = {};
            }
            if (!serviceConfig) {
                serviceConfig = {};
            }
            try {
                return yield this.httpService.postAsync({
                    url: url,
                    body: body
                }, {
                    cancelToken: queryConfig === null || queryConfig === void 0 ? void 0 : queryConfig.cancelToken,
                    responseType: 'json',
                    retryStrategy: this.config.retryStrategy,
                    headers: this.getHeaders(queryConfig, serviceConfig.headers ? serviceConfig.headers : [])
                });
            }
            catch (error) {
                throw this.mapDeliveryError(error);
            }
        });
    }
    /**
     * Http GET response
     * @param url Url of request
     * @param queryConfig Query config configuration
     */
    getResponseAsync(url, queryConfig, serviceConfig) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!queryConfig) {
                queryConfig = {};
            }
            if (!serviceConfig) {
                serviceConfig = {};
            }
            try {
                return yield this.httpService.getAsync({
                    url: url
                }, {
                    cancelToken: queryConfig === null || queryConfig === void 0 ? void 0 : queryConfig.cancelToken,
                    responseType: 'json',
                    retryStrategy: this.config.retryStrategy,
                    headers: this.getHeaders(queryConfig, serviceConfig.headers ? serviceConfig.headers : [])
                });
            }
            catch (error) {
                throw this.mapDeliveryError(error);
            }
        });
    }
    /**
     * Gets base URL of the request including the environment Id
     * @param queryConfig Query configuration
     */
    getBaseUrl(queryConfig) {
        return this.getDomain(queryConfig) + '/' + this.config.environmentId;
    }
    mapNetworkResponse(data, response) {
        return {
            data: data,
            response: response,
            hasStaleContent: this.getHasStaleContent(response.headers),
            xContinuationToken: this.getContinuationToken(response.headers)
        };
    }
    /**
     * Indicates if current query should use preview mode
     * @param queryConfig Query configuration
     */
    isPreviewModeEnabled(queryConfig) {
        if (queryConfig.usePreviewMode !== undefined) {
            return queryConfig.usePreviewMode;
        }
        if (!this.config.defaultQueryConfig) {
            return false;
        }
        if (this.config.defaultQueryConfig.usePreviewMode === true) {
            return true;
        }
        return false;
    }
    getQueryHeaders(queryConfig) {
        var _a;
        if (queryConfig.customHeaders) {
            return queryConfig.customHeaders;
        }
        if ((_a = this.config.defaultQueryConfig) === null || _a === void 0 ? void 0 : _a.customHeaders) {
            return this.config.defaultQueryConfig.customHeaders;
        }
        return [];
    }
    shouldAddWaitForLoadingNewContentHeader(queryConfig) {
        if (queryConfig.waitForLoadingNewContent !== undefined) {
            return queryConfig.waitForLoadingNewContent;
        }
        if (!this.config.defaultQueryConfig) {
            return false;
        }
        if (this.config.defaultQueryConfig.waitForLoadingNewContent === true) {
            return true;
        }
        return false;
    }
    /**
     * Indicates if current query should use secured mode
     * @param queryConfig Query configuration
     */
    isSecuredModeEnabled(queryConfig) {
        if (queryConfig.useSecuredMode !== undefined) {
            return queryConfig.useSecuredMode;
        }
        if (!this.config.defaultQueryConfig) {
            return false;
        }
        if (this.config.defaultQueryConfig.useSecuredMode === true) {
            return true;
        }
        return false;
    }
    /**
     * Gets preview or standard URL based on client and query configuration
     * @param queryConfig Query configuration
     */
    getDomain(queryConfig) {
        if (this.isPreviewModeEnabled(queryConfig)) {
            if (!this.config.previewApiKey) {
                throw Error(`Preview API key is not configured.`);
            }
            // check custom preview url
            if (this.config.proxy && this.config.proxy.basePreviewUrl) {
                return this.config.proxy.basePreviewUrl;
            }
            // use default preview url
            return this.defaultPreviewDeliveryApiUrl;
        }
        // check custom base url
        if (this.config.proxy && this.config.proxy.baseUrl) {
            return this.config.proxy.baseUrl;
        }
        return this.defaultBaseDeliveryApiUrl;
    }
    /**
     * Gets authorization header. This is used for 'preview' functionality
     */
    getAuthorizationHeader(key) {
        if (!key) {
            throw Error(`Cannot get authorization header because key is invalid`);
        }
        // authorization header required for preview mode
        return {
            header: 'authorization',
            value: `bearer ${key}`
        };
    }
    /**
     * Header identifying SDK type & version for internal purposes of Kontent.ai
     */
    getSdkIdHeader() {
        return {
            header: sdkVersionHeader,
            value: `${this.sdkInfo.host};${this.sdkInfo.name};${this.sdkInfo.version}`
        };
    }
    mapDeliveryError(error) {
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
        const deliveryErrorData = (_a = axiosError.response) === null || _a === void 0 ? void 0 : _a.data;
        if (!deliveryErrorData || !deliveryErrorData.error_code) {
            return error;
        }
        return new DeliveryError({
            errorCode: deliveryErrorData.error_code,
            message: deliveryErrorData.message,
            specificCode: deliveryErrorData.specific_code,
            requestId: deliveryErrorData.request_id
        });
    }
    getHasStaleContent(headers) {
        const hasStaleContentHeader = headers.find((m) => m.header.toLowerCase() === staleContentHeaderName.toLowerCase());
        if (hasStaleContentHeader) {
            if (hasStaleContentHeader.value.toString() === '1') {
                return true;
            }
        }
        return false;
    }
    getContinuationToken(headers) {
        const header = headers.find((m) => m.header.toLowerCase() === continuationTokenHeaderName.toLowerCase());
        return header ? header.value : undefined;
    }
}
//# sourceMappingURL=base-delivery-query.service.js.map