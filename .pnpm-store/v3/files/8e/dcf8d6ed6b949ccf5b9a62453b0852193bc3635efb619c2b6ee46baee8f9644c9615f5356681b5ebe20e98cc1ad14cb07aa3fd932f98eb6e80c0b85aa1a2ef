import { IManagementClientConfig } from '../../config';
import { Identifiers } from '../../models';
import { LanguageResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';
export declare class ViewLanguageQuery extends BaseQuery<LanguageResponses.ViewLanguageResponse> {
    protected config: IManagementClientConfig;
    protected queryService: ManagementQueryService;
    identifier: Identifiers.LanguageIdentifier;
    constructor(config: IManagementClientConfig, queryService: ManagementQueryService, identifier: Identifiers.LanguageIdentifier);
    toPromise(): Promise<LanguageResponses.ViewLanguageResponse>;
    protected getAction(): string;
}
