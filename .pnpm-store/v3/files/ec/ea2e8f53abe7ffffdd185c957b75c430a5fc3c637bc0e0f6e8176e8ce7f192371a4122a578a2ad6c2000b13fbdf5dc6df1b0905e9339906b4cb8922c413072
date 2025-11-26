import { IManagementClientConfig } from '../config';
import { ManagementQueryService } from '../services';
export declare class ActionQuery<TResult> {
    protected config: IManagementClientConfig;
    protected queryService: ManagementQueryService;
    protected buildResult: (config: IManagementClientConfig, queryService: ManagementQueryService, action: string) => TResult;
    constructor(config: IManagementClientConfig, queryService: ManagementQueryService, buildResult: (config: IManagementClientConfig, queryService: ManagementQueryService, action: string) => TResult);
    /**
     * Sets action to use for request
     */
    withAction(action: string): TResult;
}
