import { Contracts } from '../../contracts';
import { IDeliveryClientConfig } from '../../config';
import { IDeliveryNetworkResponse, ITaxonomyQueryConfig, Responses } from '../../models';
import { QueryService } from '../../services';
import { BaseListingQuery } from '../common/base-listing-query.class';
export declare class TaxonomiesQuery extends BaseListingQuery<Responses.IListTaxonomiesResponse, Responses.IListTaxonomiesAllResponse, ITaxonomyQueryConfig, Contracts.IListTaxonomyGroupsContract> {
    protected config: IDeliveryClientConfig;
    protected queryService: QueryService;
    /**
     * Taxonomies endpoint URL action
     */
    protected readonly taxonomiesEndpoint: string;
    protected _queryConfig: ITaxonomyQueryConfig;
    constructor(config: IDeliveryClientConfig, queryService: QueryService);
    /**
     * Limits the number of taxonomies returned by query
     * @param limit Number of taxonomies to load
     */
    limitParameter(limit: number): this;
    /**
     * Skips the selected number of taxonomies
     * @param skip Number of taxonomies to skip
     */
    skipParameter(skip: number): this;
    toPromise(): Promise<IDeliveryNetworkResponse<Responses.IListTaxonomiesResponse, Contracts.IListTaxonomyGroupsContract>>;
    getUrl(): string;
    map(json: any): Responses.IListTaxonomiesResponse;
    protected allResponseFactory(items: any[], responses: IDeliveryNetworkResponse<Responses.IListTaxonomiesResponse, Contracts.IListTaxonomyGroupsContract>[]): Responses.IListTaxonomiesAllResponse;
}
