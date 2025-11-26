import { IManagementClientConfig } from '../config';
import { Identifiers } from '../models';
import { ManagementQueryService } from '../services';
export declare class RenditionIdentifierQuery<TResult> {
    protected config: IManagementClientConfig;
    protected queryService: ManagementQueryService;
    protected buildResult: (config: IManagementClientConfig, queryService: ManagementQueryService, identifier: Identifiers.RenditionIdentifier) => TResult;
    constructor(config: IManagementClientConfig, queryService: ManagementQueryService, buildResult: (config: IManagementClientConfig, queryService: ManagementQueryService, identifier: Identifiers.RenditionIdentifier) => TResult);
    /**
    * Gets using internal Id
    * @param id Internal Id of content item
    */
    byRenditionId(id: string): TResult;
    /**
    * Gets query using external Id
    * @param id External Id of content item
    */
    byRenditionExternalId(id: string): TResult;
}
