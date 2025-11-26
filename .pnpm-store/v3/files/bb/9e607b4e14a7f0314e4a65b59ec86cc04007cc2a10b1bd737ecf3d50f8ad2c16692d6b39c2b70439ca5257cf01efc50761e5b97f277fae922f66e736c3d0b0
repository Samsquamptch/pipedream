import { IManagementClientConfig } from '../config';
import { Identifiers } from '../models';
import { ManagementQueryService } from '../services';
export declare class RoleIdentifierQuery<TResult> {
    protected config: IManagementClientConfig;
    protected queryService: ManagementQueryService;
    protected buildResult: (config: IManagementClientConfig, queryService: ManagementQueryService, identifier: Identifiers.RoleIdentifier) => TResult;
    constructor(config: IManagementClientConfig, queryService: ManagementQueryService, buildResult: (config: IManagementClientConfig, queryService: ManagementQueryService, identifier: Identifiers.RoleIdentifier) => TResult);
    /**
     * Id
     * @param id Internal Id
     */
    byId(id: string): TResult;
    /**
     * Codename
     * @param codename Codename
     */
    byCodename(id: string): TResult;
}
