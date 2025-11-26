import { IManagementClientConfig } from '../config';
import { ManagementQueryService } from '../services';
export declare class DataQueryOptional<TResult, TData> {
    protected config: IManagementClientConfig;
    protected queryService: ManagementQueryService;
    protected buildResult: (config: IManagementClientConfig, queryService: ManagementQueryService, data: TData | undefined) => TResult;
    constructor(config: IManagementClientConfig, queryService: ManagementQueryService, buildResult: (config: IManagementClientConfig, queryService: ManagementQueryService, data: TData | undefined) => TResult);
    /**
     * Gets query without data
     */
    withoutData(): TResult;
    /**
     * Gets query with data
     * @param data Data for query
     */
    withData(data: TData): TResult;
}
