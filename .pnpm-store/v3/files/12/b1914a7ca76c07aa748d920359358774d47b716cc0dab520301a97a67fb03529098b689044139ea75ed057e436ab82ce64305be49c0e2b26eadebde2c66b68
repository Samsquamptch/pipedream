import { IManagementClientConfig } from '../config';
import { Identifiers } from '../models';
import { ManagementQueryService } from '../services';
export declare class ContentTypeCodenameAndIdIdentifierQuery<TResult> {
    protected config: IManagementClientConfig;
    protected queryService: ManagementQueryService;
    protected buildResult: (config: IManagementClientConfig, queryService: ManagementQueryService, identifier: Identifiers.ContentTypeIdentifier) => TResult;
    constructor(config: IManagementClientConfig, queryService: ManagementQueryService, buildResult: (config: IManagementClientConfig, queryService: ManagementQueryService, identifier: Identifiers.ContentTypeIdentifier) => TResult);
    /**
    * Gets query using internal Id
    * @param id Internal Id of content item
    */
    byTypeId(id: string): TResult;
    /**
    * Gets query using codename
    * @param codename Codename of content item
    */
    byTypeCodename(codename: string): TResult;
}
