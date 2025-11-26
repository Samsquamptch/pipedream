import { IManagementClientConfig } from '../../config';
import { Identifiers } from '../../models';
import { LanguageVariantResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseListingQuery } from '../base-listing-query';
export declare class ListLanguageVariantsByCollectionQuery extends BaseListingQuery<LanguageVariantResponses.ListLanguageVariantsByCollectionResponse, LanguageVariantResponses.ListAllLanguageVariantsByCollectionResponse> {
    protected config: IManagementClientConfig;
    protected queryService: ManagementQueryService;
    protected identifier: Identifiers.CollectionIdentifier;
    constructor(config: IManagementClientConfig, queryService: ManagementQueryService, identifier: Identifiers.CollectionIdentifier);
    toPromise(): Promise<LanguageVariantResponses.ListLanguageVariantsByCollectionResponse>;
    protected getAction(): string;
    protected allResponseFactory(items: any[], responses: LanguageVariantResponses.ListLanguageVariantsByCollectionResponse[]): LanguageVariantResponses.ListAllLanguageVariantsByCollectionResponse;
}
