import { IManagementClientConfig } from '../config';
import { Identifiers } from '../models';
import { ManagementQueryService } from '../services';
export declare class CollectionIdentifierQuery<TResult> {
    protected config: IManagementClientConfig;
    protected queryService: ManagementQueryService;
    protected buildResult: (config: IManagementClientConfig, queryService: ManagementQueryService, identifier: Identifiers.CollectionIdentifier) => TResult;
    constructor(config: IManagementClientConfig, queryService: ManagementQueryService, buildResult: (config: IManagementClientConfig, queryService: ManagementQueryService, identifier: Identifiers.CollectionIdentifier) => TResult);
    /**
    * Gets using internal Id
    * @param id Internal Id of collection
    */
    byCollectionId(id: string): TResult;
    /**
    * Gets query using external Id
    * @param id External Id of collection
    */
    byCollectionExternalId(id: string): TResult;
    /**
    * Gets query using codename
    * @param codename Codename of collection
    */
    byCollectionCodename(codename: string): TResult;
}
