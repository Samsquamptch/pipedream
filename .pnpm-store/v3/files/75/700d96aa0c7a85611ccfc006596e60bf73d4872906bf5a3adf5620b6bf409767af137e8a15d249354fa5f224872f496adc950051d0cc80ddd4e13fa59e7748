import { IManagementClientConfig } from '../config';
import { Identifiers } from '../models';
import { ManagementQueryService } from '../services';
export declare class LanguageIdAndCodenameIdentifierQuery<TResult> {
    protected config: IManagementClientConfig;
    protected queryService: ManagementQueryService;
    protected buildResult: (config: IManagementClientConfig, queryService: ManagementQueryService, identifier: Identifiers.LanguageIdentifier) => TResult;
    constructor(config: IManagementClientConfig, queryService: ManagementQueryService, buildResult: (config: IManagementClientConfig, queryService: ManagementQueryService, identifier: Identifiers.LanguageIdentifier) => TResult);
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
