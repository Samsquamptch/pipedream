import { IManagementClientConfig } from '../config';
import { ManagementQueryService } from '../services';
export declare class DataQuery<TResult, TData> {
    protected config: IManagementClientConfig;
    protected queryService: ManagementQueryService;
    protected buildResult: (config: IManagementClientConfig, queryService: ManagementQueryService, data: TData) => TResult;
    constructor(config: IManagementClientConfig, queryService: ManagementQueryService, buildResult: (config: IManagementClientConfig, queryService: ManagementQueryService, data: TData) => TResult);
    /**
     * Gets query with data
     * @param data Data for query
     */
    withData(data: TData): TResult;
}
