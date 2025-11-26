import { IManagementClientConfig } from '../config';
import { Identifiers } from '../models';
import { ManagementQueryService } from '../services';
export declare class IdIdentifierQuery<TResult> {
    protected config: IManagementClientConfig;
    protected queryService: ManagementQueryService;
    protected buildResult: (config: IManagementClientConfig, queryService: ManagementQueryService, identifier: Identifiers.ContentItemIdentifier) => TResult;
    constructor(config: IManagementClientConfig, queryService: ManagementQueryService, buildResult: (config: IManagementClientConfig, queryService: ManagementQueryService, identifier: Identifiers.ContentItemIdentifier) => TResult);
    /**
    * Gets using internal Id
    * @param id Internal Id
    */
    byItemId(id: string): TResult;
    /**
    * Gets query using external Id
    * @param externalId External Id
    */
    byItemExternalId(externalId: string): TResult;
}
