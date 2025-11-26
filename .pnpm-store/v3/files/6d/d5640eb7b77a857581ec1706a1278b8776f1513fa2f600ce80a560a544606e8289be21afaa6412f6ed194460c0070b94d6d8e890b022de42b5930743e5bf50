import { IManagementClientConfig } from '../../config';
import { TaxonomyResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseListingQuery } from '../base-listing-query';
export declare class ListTaxonomiesQuery extends BaseListingQuery<TaxonomyResponses.TaxonomyListResponse, TaxonomyResponses.ListAllTaxonomiesResponse> {
    protected config: IManagementClientConfig;
    protected queryService: ManagementQueryService;
    constructor(config: IManagementClientConfig, queryService: ManagementQueryService);
    toPromise(): Promise<TaxonomyResponses.TaxonomyListResponse>;
    protected getAction(): string;
    protected allResponseFactory(items: any[], responses: TaxonomyResponses.TaxonomyListResponse[]): TaxonomyResponses.ListAllTaxonomiesResponse;
}
