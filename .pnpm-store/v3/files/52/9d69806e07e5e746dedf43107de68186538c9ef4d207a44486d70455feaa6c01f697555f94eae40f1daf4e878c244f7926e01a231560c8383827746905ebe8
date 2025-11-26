import { IResponse, IHttpDeleteQueryCall, IHttpGetQueryCall, IHttpPatchQueryCall, IHttpPostQueryCall, IHttpPutQueryCall, IHttpQueryOptions, IHttpCancelRequestToken } from './http.models';
import { IHttpService } from './ihttp.service';
export declare class TestHttpService implements IHttpService<undefined> {
    response?: IResponse<any>;
    error?: any;
    constructor(config: {
        response?: IResponse<any>;
        error?: any;
    });
    getAsync<TRawData>(call: IHttpGetQueryCall, options?: IHttpQueryOptions<undefined>): Promise<IResponse<TRawData>>;
    postAsync<TRawData>(call: IHttpPostQueryCall, options?: IHttpQueryOptions<undefined>): Promise<IResponse<TRawData>>;
    putAsync<TRawData>(call: IHttpPutQueryCall, options?: IHttpQueryOptions<undefined>): Promise<IResponse<TRawData>>;
    patchAsync<TRawData>(call: IHttpPatchQueryCall, options?: IHttpQueryOptions<undefined>): Promise<IResponse<TRawData>>;
    deleteAsync<TRawData>(call: IHttpDeleteQueryCall, options?: IHttpQueryOptions<undefined>): Promise<IResponse<TRawData>>;
    createCancelToken(): IHttpCancelRequestToken<undefined>;
    private resolveTestCall;
}
