import { Contracts } from '../../contracts';
import { IDeliveryClientConfig } from '../../config';
import { IDeliveryNetworkResponse, ILanguagesQueryConfig, Responses } from '../../models';
import { QueryService } from '../../services';
import { BaseListingQuery } from '../common/base-listing-query.class';
export declare class LanguagesQuery extends BaseListingQuery<Responses.IListLanguagesResponse, Responses.IListLanguagesAllResponse, ILanguagesQueryConfig, Contracts.IListLanguagesContract> {
    protected config: IDeliveryClientConfig;
    protected queryService: QueryService;
    /**
     * Endpoint
     */
    protected readonly endpoint: string;
    protected _queryConfig: ILanguagesQueryConfig;
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
    toPromise(): Promise<IDeliveryNetworkResponse<Responses.IListLanguagesResponse, Contracts.IListLanguagesContract>>;
    getUrl(): string;
    /**
     * Used to configure query
     * @param queryConfig Query configuration
     */
    queryConfig(queryConfig: ILanguagesQueryConfig): this;
    map(json: any): Responses.IListLanguagesResponse;
    protected allResponseFactory(items: any[], responses: IDeliveryNetworkResponse<Responses.IListLanguagesResponse, Contracts.IListLanguagesContract>[]): Responses.IListLanguagesAllResponse;
}
