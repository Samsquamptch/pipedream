import { IManagementClientConfig } from '../config';
import { Identifiers } from '../models';
import { ManagementQueryService } from '../services';
export declare class UserIdentifierQuery<TResult> {
    protected config: IManagementClientConfig;
    protected queryService: ManagementQueryService;
    protected buildResult: (config: IManagementClientConfig, queryService: ManagementQueryService, identifier: Identifiers.UserIdentifier) => TResult;
    constructor(config: IManagementClientConfig, queryService: ManagementQueryService, buildResult: (config: IManagementClientConfig, queryService: ManagementQueryService, identifier: Identifiers.UserIdentifier) => TResult);
    /**
     * Gets using email
     * @param email Email
     */
    byEmail(email: string): TResult;
    /**
     * Gets using internal Id
     * @param id Internal Id
     */
    byId(id: string): TResult;
}
