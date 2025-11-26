import { IManagementClientConfig } from '../../config';
import { Identifiers } from '../../models';
import { LanguageVariantResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseListingQuery } from '../base-listing-query';
export declare class ListLanguageVariantsBySpaceQuery extends BaseListingQuery<LanguageVariantResponses.ListLanguageVariantsBySpaceResponse, LanguageVariantResponses.ListAllLanguageVariantsBySpaceResponse> {
    protected config: IManagementClientConfig;
    protected queryService: ManagementQueryService;
    protected identifier: Identifiers.SpaceIdentifier;
    constructor(config: IManagementClientConfig, queryService: ManagementQueryService, identifier: Identifiers.SpaceIdentifier);
    toPromise(): Promise<LanguageVariantResponses.ListLanguageVariantsBySpaceResponse>;
    protected getAction(): string;
    protected allResponseFactory(items: any[], responses: LanguageVariantResponses.ListLanguageVariantsBySpaceResponse[]): LanguageVariantResponses.ListAllLanguageVariantsBySpaceResponse;
}
