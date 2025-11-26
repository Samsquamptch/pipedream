import { IResponse, IHeader, IHttpService, IQueryParameter, ISDKInfo } from '@kontent-ai/core-sdk';
import { IManagementClientConfig } from '../config/imanagement-client-config.interface';
import { IContentManagementInternalQueryConfig, IContentManagementQueryConfig } from '../models';
export declare abstract class BaseManagementQueryService<TCancelToken> {
    protected readonly config: IManagementClientConfig;
    protected readonly httpService: IHttpService<TCancelToken>;
    protected readonly sdkInfo: ISDKInfo;
    /**
     * Default base url for content management API
     */
    private readonly defaultBaseCMUrl;
    constructor(config: IManagementClientConfig, httpService: IHttpService<TCancelToken>, sdkInfo: ISDKInfo);
    /**
     * Gets url based on the action, query configuration and options (parameters)
     * @param action Action (= url part) that will be hit
     * @param options Query options
     * @param addSlash Indicates if slash is added to query
     */
    getFullUrl(action: string, options?: IQueryParameter[], addSlash?: boolean): string;
    /**
     * Gets proper set of headers for given request.
     * @param config Query config
     */
    getHeaders(config: IContentManagementQueryConfig): IHeader[];
    /**
     * Http PATCH response
     * @param url Url of request
     * @param config Query configuration
     */
    protected patchResponseAsync<TRawData>(url: string, body: any, internalConfig: IContentManagementInternalQueryConfig, config: IContentManagementQueryConfig): Promise<IResponse<TRawData>>;
    /**
     * Http GET response
     * @param url Url of request
     * @param config Query configuration
     */
    protected getResponseAsync<TRawData>(url: string, internalConfig: IContentManagementInternalQueryConfig, config: IContentManagementQueryConfig): Promise<IResponse<TRawData>>;
    /**
     * Http POST response
     * @param url Url of request
     * @param body Body of the request (names and values)
     * @param config Query configuration
     */
    protected postResponseAsync<TRawData>(url: string, body: any, internalConfig: IContentManagementInternalQueryConfig, config: IContentManagementQueryConfig): Promise<IResponse<TRawData>>;
    /**
     * Http PUT response
     * @param url Url of request
     * @param body Body of the request (names and values)
     * @param config Query configuration
     */
    protected putResponseAsync<TRawData>(url: string, body: any, internalConfig: IContentManagementInternalQueryConfig, config: IContentManagementQueryConfig): Promise<IResponse<TRawData>>;
    /**
     * Http Delete response
     * @param url Url of request
     * @param body Body of the request (names and values)
     * @param config Query configuration
     */
    protected deleteResponseAsync<TRawData>(url: string, internalConfig: IContentManagementInternalQueryConfig, config: IContentManagementQueryConfig): Promise<IResponse<TRawData>>;
    protected getBinaryDataFromUrlAsync(url: string): Promise<ArrayBuffer>;
    protected getMimeTypeFromFilename(filename: string): string | null;
    private mapContentManagementError;
    /**
     * Gets authorization header
     */
    private getAuthorizationHeader;
    /**
     * Gets base URL of the request including the project Id
     */
    private getBaseUrl;
}
