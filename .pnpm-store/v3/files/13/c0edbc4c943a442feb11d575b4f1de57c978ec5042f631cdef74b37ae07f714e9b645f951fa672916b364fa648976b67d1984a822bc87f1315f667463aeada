import { IManagementClientConfig } from '../../config';
import { Identifiers } from '../../models';
import { LanguageVariantResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseListingQuery } from '../base-listing-query';
export declare class ListLanguageVariantsOfContentTypeWithComponentsQuery extends BaseListingQuery<LanguageVariantResponses.ListLanguageVariantsOfContentTypeWithComponentsResponse, LanguageVariantResponses.ListAllLanguageVariantsOfContentTypeWithComponentsResponse> {
    protected config: IManagementClientConfig;
    protected queryService: ManagementQueryService;
    protected identifier: Identifiers.ContentTypeIdentifier;
    constructor(config: IManagementClientConfig, queryService: ManagementQueryService, identifier: Identifiers.ContentTypeIdentifier);
    toPromise(): Promise<LanguageVariantResponses.ListLanguageVariantsOfContentTypeWithComponentsResponse>;
    protected getAction(): string;
    protected allResponseFactory(items: any[], responses: LanguageVariantResponses.ListLanguageVariantsOfContentTypeWithComponentsResponse[]): LanguageVariantResponses.ListAllLanguageVariantsOfContentTypeWithComponentsResponse;
}
