import { Contracts } from '../../contracts';
import { IDeliveryClientConfig } from '../../config';
import { Responses, IElementQueryConfig, IDeliveryNetworkResponse } from '../../models';
import { QueryService } from '../../services';
import { BaseQuery } from '../common/base-query.class';
export declare class ElementQuery extends BaseQuery<Responses.IViewContentTypeElementResponse, IElementQueryConfig, Contracts.IViewContentTypeElementContract> {
    protected config: IDeliveryClientConfig;
    protected queryService: QueryService;
    private typeCodename;
    private elementCodename;
    protected _queryConfig: IElementQueryConfig;
    constructor(config: IDeliveryClientConfig, queryService: QueryService, typeCodename: string, elementCodename: string);
    toPromise(): Promise<IDeliveryNetworkResponse<Responses.IViewContentTypeElementResponse, Contracts.IViewContentTypeElementContract>>;
    getUrl(): string;
    map(json: any): Responses.IViewContentTypeElementResponse;
}
