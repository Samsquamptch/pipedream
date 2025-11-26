import { IManagementClientConfig } from '../config';
import { Identifiers } from '../models';
import { ManagementQueryService } from '../services';
export declare class TaxonomyIdentifierQuery<TResult> {
    protected config: IManagementClientConfig;
    protected queryService: ManagementQueryService;
    protected buildResult: (config: IManagementClientConfig, queryService: ManagementQueryService, identifier: Identifiers.TaxonomyIdentifier) => TResult;
    constructor(config: IManagementClientConfig, queryService: ManagementQueryService, buildResult: (config: IManagementClientConfig, queryService: ManagementQueryService, identifier: Identifiers.TaxonomyIdentifier) => TResult);
    /**
    * Gets using internal Id
    * @param id Internal Id of content item
    */
    byTaxonomyId(id: string): TResult;
    /**
    * Gets query using external Id
    * @param id External Id of content item
    */
    byTaxonomyExternalId(id: string): TResult;
    /**
    * Gets query using codename
    * @param codename Codename of content item
    */
    byTaxonomyCodename(codename: string): TResult;
}
