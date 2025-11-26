import { AxiosRequestConfig, CancelToken } from 'axios';
import { IResponse, IHttpDeleteQueryCall, IHttpGetQueryCall, IHttpPatchQueryCall, IHttpPostQueryCall, IHttpPutQueryCall, IHttpQueryOptions, IHttpCancelRequestToken } from './http.models';
import { IHttpService } from './ihttp.service';
export declare class HttpService implements IHttpService<CancelToken> {
    private opts?;
    private readonly axiosInstance;
    private readonly functionsConfig;
    constructor(opts?: {
        axiosRequestConfig?: AxiosRequestConfig<any> | undefined;
        logErrorsToConsole?: boolean | undefined;
    } | undefined);
    getAsync<TRawData>(call: IHttpGetQueryCall, options?: IHttpQueryOptions<CancelToken>): Promise<IResponse<TRawData>>;
    postAsync<TRawData>(call: IHttpPostQueryCall, options?: IHttpQueryOptions<CancelToken>): Promise<IResponse<TRawData>>;
    putAsync<TRawData>(call: IHttpPutQueryCall, options?: IHttpQueryOptions<CancelToken>): Promise<IResponse<TRawData>>;
    patchAsync<TRawData>(call: IHttpPatchQueryCall, options?: IHttpQueryOptions<CancelToken>): Promise<IResponse<TRawData>>;
    deleteAsync<TRawData>(call: IHttpDeleteQueryCall, options?: IHttpQueryOptions<CancelToken>): Promise<IResponse<TRawData>>;
    createCancelToken(): IHttpCancelRequestToken<CancelToken>;
    private getFunctionsConfig;
}
