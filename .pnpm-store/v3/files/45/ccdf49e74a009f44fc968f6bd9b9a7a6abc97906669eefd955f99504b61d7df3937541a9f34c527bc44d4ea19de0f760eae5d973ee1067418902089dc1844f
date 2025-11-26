import { Contracts } from '../../contracts';
import { IDeliveryClientConfig } from '../../config';
import { IItemQueryConfig, IDeliveryNetworkResponse, Responses } from '../../models';
import { QueryService } from '../../services';
import { BaseListingQuery } from '../common/base-listing-query.class';
export declare class SyncChangesQuery extends BaseListingQuery<Responses.ISyncChangesResponse, Responses.ISyncChangesAllResponse, IItemQueryConfig, Contracts.ISyncChangesContract> {
    protected config: IDeliveryClientConfig;
    protected queryService: QueryService;
    protected _queryConfig: IItemQueryConfig;
    private readonly action;
    constructor(config: IDeliveryClientConfig, queryService: QueryService);
    toPromise(): Promise<IDeliveryNetworkResponse<Responses.ISyncChangesResponse, Contracts.ISyncChangesContract>>;
    getUrl(): string;
    /**
     * Used to configure query
     * @param queryConfig Query configuration
     */
    queryConfig(queryConfig: IItemQueryConfig): this;
    map(json: any): Responses.ISyncChangesResponse;
    protected allResponseFactory(items: any[], responses: IDeliveryNetworkResponse<Responses.ISyncChangesResponse, Contracts.ISyncChangesContract>[]): Responses.ISyncChangesAllResponse;
}
