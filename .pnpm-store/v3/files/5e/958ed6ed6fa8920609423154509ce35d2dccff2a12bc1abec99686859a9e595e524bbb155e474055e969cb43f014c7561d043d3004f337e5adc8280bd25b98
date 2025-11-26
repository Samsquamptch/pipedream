import { AxiosInstance, CancelToken } from 'axios';
import { IHttpCancelRequestToken, IHttpDeleteQueryCall, IHttpGetQueryCall, IHttpPatchQueryCall, IHttpPostQueryCall, IHttpPutQueryCall, IHttpQueryOptions, IResponse } from './http.models';
export interface IHttpFunctionsConfig {
    logErrorsToConsole: boolean;
}
export declare function getWithRetryAsync<TRawData>(instance: AxiosInstance, call: IHttpGetQueryCall, functionsConfig: IHttpFunctionsConfig, options?: IHttpQueryOptions<CancelToken>): Promise<IResponse<TRawData>>;
export declare function postWithRetryAsync<TRawData>(instance: AxiosInstance, call: IHttpPostQueryCall, functionsConfig: IHttpFunctionsConfig, options?: IHttpQueryOptions<CancelToken>): Promise<IResponse<TRawData>>;
export declare function putWithRetryAsync<TRawData>(instance: AxiosInstance, call: IHttpPutQueryCall, functionsConfig: IHttpFunctionsConfig, options?: IHttpQueryOptions<CancelToken>): Promise<IResponse<TRawData>>;
export declare function patchWithRetryAsync<TRawData>(instance: AxiosInstance, call: IHttpPatchQueryCall, functionsConfig: IHttpFunctionsConfig, options?: IHttpQueryOptions<CancelToken>): Promise<IResponse<TRawData>>;
export declare function deleteWithRetryAsync<TRawData>(instance: AxiosInstance, call: IHttpDeleteQueryCall, functionsConfig: IHttpFunctionsConfig, options?: IHttpQueryOptions<CancelToken>): Promise<IResponse<TRawData>>;
export declare function createCancelToken(): IHttpCancelRequestToken<CancelToken>;
