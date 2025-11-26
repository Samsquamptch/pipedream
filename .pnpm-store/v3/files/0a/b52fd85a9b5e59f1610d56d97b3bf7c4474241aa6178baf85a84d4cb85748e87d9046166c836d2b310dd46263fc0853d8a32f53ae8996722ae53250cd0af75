import { IManagementClientConfig } from '../config';
import { Identifiers } from '../models';
import { ManagementQueryService } from '../services';
export declare class LanguageIdentifierQuery<TResult> {
    protected config: IManagementClientConfig;
    protected queryService: ManagementQueryService;
    protected buildResult: (config: IManagementClientConfig, queryService: ManagementQueryService, identifier: Identifiers.LanguageIdentifier) => TResult;
    constructor(config: IManagementClientConfig, queryService: ManagementQueryService, buildResult: (config: IManagementClientConfig, queryService: ManagementQueryService, identifier: Identifiers.LanguageIdentifier) => TResult);
    /**
    * Gets using external Id
    * @param externalId Internal Id
    */
    byExternalId(externalId: string): TResult;
    /**
    * Gets using internal Id
    * @param id Internal Id
    */
    byLanguageId(id: string): TResult;
    /**
    * Gets query using codename
    * @param codename Codename
    */
    byLanguageCodename(codename: string): TResult;
}
