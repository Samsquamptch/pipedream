import { Identifiers } from '../models/identifiers';
import { IManagementClientConfig } from '../config';
import { ManagementQueryService } from '../services';
export declare class EnvironmentIdentifierQuery<TResult> {
    protected config: IManagementClientConfig;
    protected queryService: ManagementQueryService;
    protected buildResult: (config: IManagementClientConfig, queryService: ManagementQueryService, itentifier: Identifiers.EnvironmentIdentifier) => TResult;
    constructor(config: IManagementClientConfig, queryService: ManagementQueryService, buildResult: (config: IManagementClientConfig, queryService: ManagementQueryService, itentifier: Identifiers.EnvironmentIdentifier) => TResult);
    /**
     * For given environment by id
     * @param environmentId EnvironmentId
     */
    environmentId(environmentId: string): TResult;
}
