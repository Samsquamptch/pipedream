import { IManagementClientConfig } from '../config';
import { Identifiers } from '../models';
import { ManagementQueryService } from '../services';
export declare class ContentItemIdentifierQuery<TResult> {
    protected config: IManagementClientConfig;
    protected queryService: ManagementQueryService;
    protected buildResult: (config: IManagementClientConfig, queryService: ManagementQueryService, identifier: Identifiers.ContentItemIdentifier) => TResult;
    constructor(config: IManagementClientConfig, queryService: ManagementQueryService, buildResult: (config: IManagementClientConfig, queryService: ManagementQueryService, identifier: Identifiers.ContentItemIdentifier) => TResult);
    /**
    * Gets using internal Id
    * @param id Internal Id of content item
    */
    byItemId(id: string): TResult;
    /**
    * Gets query using external Id
    * @param id External Id of content item
    */
    byItemExternalId(id: string): TResult;
    /**
    * Gets query using codename
    * @param codename Codename of content item
    */
    byItemCodename(codename: string): TResult;
}
