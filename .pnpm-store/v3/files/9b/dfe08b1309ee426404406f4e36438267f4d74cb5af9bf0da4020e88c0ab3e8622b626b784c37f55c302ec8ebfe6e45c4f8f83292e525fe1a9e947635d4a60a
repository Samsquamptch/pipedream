import { Contracts } from '../../contracts';
import { IDeliveryClientConfig } from '../../config';
import { IDeliveryNetworkResponse, ITaxonomyQueryConfig, Responses } from '../../models';
import { QueryService } from '../../services';
import { BaseQuery } from '../common/base-query.class';
export declare class TaxonomyQuery extends BaseQuery<Responses.IViewTaxonomyResponse, ITaxonomyQueryConfig, Contracts.IViewTaxonomyGroupContract> {
    protected config: IDeliveryClientConfig;
    protected queryService: QueryService;
    private taxonomyCodename;
    /**
     * Taxonomies endpoint URL action
     */
    protected readonly taxonomiesEndpoint: string;
    protected _queryConfig: ITaxonomyQueryConfig;
    constructor(config: IDeliveryClientConfig, queryService: QueryService, taxonomyCodename: string);
    toPromise(): Promise<IDeliveryNetworkResponse<Responses.IViewTaxonomyResponse, Contracts.IViewTaxonomyGroupContract>>;
    getUrl(): string;
    map(json: any): Responses.IViewTaxonomyResponse;
}
