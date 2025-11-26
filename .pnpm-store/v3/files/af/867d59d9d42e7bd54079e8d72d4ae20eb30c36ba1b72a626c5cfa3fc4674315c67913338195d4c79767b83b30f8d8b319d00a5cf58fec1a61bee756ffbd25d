import { Contracts } from '../../contracts';
import { IDeliveryClientConfig } from '../../config';
import { IContentTypeQueryConfig, IDeliveryNetworkResponse, Responses } from '../../models';
import { QueryService } from '../../services';
import { BaseQuery } from '../common/base-query.class';
export declare class SingleTypeQuery extends BaseQuery<Responses.IViewContentTypeResponse, IContentTypeQueryConfig, Contracts.IViewContentTypeContract> {
    protected config: IDeliveryClientConfig;
    protected queryService: QueryService;
    private typeCodename;
    protected _queryConfig: IContentTypeQueryConfig;
    constructor(config: IDeliveryClientConfig, queryService: QueryService, typeCodename: string);
    toPromise(): Promise<IDeliveryNetworkResponse<Responses.IViewContentTypeResponse, Contracts.IViewContentTypeContract>>;
    getUrl(): string;
    map(json: any): Responses.IViewContentTypeResponse;
}
