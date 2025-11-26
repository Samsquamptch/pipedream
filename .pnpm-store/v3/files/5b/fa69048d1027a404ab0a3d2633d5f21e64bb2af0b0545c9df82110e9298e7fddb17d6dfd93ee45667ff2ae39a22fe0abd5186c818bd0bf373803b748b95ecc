import { IManagementClientConfig } from '../../config';
import { Identifiers } from '../../models';
import { LanguageVariantResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseListingQuery } from '../base-listing-query';
export declare class ListLanguageVariantsOfContentTypeQuery extends BaseListingQuery<LanguageVariantResponses.ListLanguageVariantsOfContentTypeResponse, LanguageVariantResponses.ListAllLanguageVariantsOfContentTypeResponse> {
    protected config: IManagementClientConfig;
    protected queryService: ManagementQueryService;
    protected identifier: Identifiers.ContentTypeIdentifier;
    constructor(config: IManagementClientConfig, queryService: ManagementQueryService, identifier: Identifiers.ContentTypeIdentifier);
    toPromise(): Promise<LanguageVariantResponses.ListLanguageVariantsOfContentTypeResponse>;
    protected getAction(): string;
    protected allResponseFactory(items: any[], responses: LanguageVariantResponses.ListLanguageVariantsOfContentTypeResponse[]): LanguageVariantResponses.ListAllLanguageVariantsOfContentTypeResponse;
}
