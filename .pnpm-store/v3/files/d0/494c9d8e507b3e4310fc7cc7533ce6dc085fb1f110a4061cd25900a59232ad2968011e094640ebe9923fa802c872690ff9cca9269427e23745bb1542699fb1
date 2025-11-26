import { IManagementClientConfig } from '../../config';
import { LanguageResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseListingQuery } from '../base-listing-query';
export declare class ListLanguagesQuery extends BaseListingQuery<LanguageResponses.ListLanguagesResponse, LanguageResponses.ListAllLanguagesResponse> {
    protected config: IManagementClientConfig;
    protected queryService: ManagementQueryService;
    constructor(config: IManagementClientConfig, queryService: ManagementQueryService);
    toPromise(): Promise<LanguageResponses.ListLanguagesResponse>;
    protected getAction(): string;
    protected allResponseFactory(items: any[], responses: LanguageResponses.ListLanguagesResponse[]): LanguageResponses.ListAllLanguagesResponse;
}
