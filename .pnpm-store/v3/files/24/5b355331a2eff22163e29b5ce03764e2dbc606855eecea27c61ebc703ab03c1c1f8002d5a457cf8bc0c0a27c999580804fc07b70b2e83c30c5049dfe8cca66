import { Contracts } from '../../contracts';
import { IDeliveryClientConfig } from '../../config';
import { IDeliveryNetworkResponse, ILanguagesQueryConfig, ISyncInitQueryConfig, Responses } from '../../models';
import { QueryService } from '../../services';
import { BaseQuery } from '../common/base-query.class';
export declare class InitializeSyncQuery extends BaseQuery<Responses.IInitializeSyncResponse, ISyncInitQueryConfig, Contracts.IInitializeSyncContract> {
    protected config: IDeliveryClientConfig;
    protected queryService: QueryService;
    protected readonly endpoint: string;
    protected _queryConfig: ILanguagesQueryConfig;
    constructor(config: IDeliveryClientConfig, queryService: QueryService);
    /**
     * Gets only item of given type
     * @param type Codename of type to get
     */
    type(type: string): this;
    /**
     * Gets only item from given collection
     * @param collection Codename of collection to get
     */
    collection(collection: string): this;
    /**
     * Language codename
     * @param languageCodename Codename of the language
     */
    languageParameter(languageCodename: string): this;
    toPromise(): Promise<IDeliveryNetworkResponse<Responses.IInitializeSyncResponse, Contracts.IInitializeSyncContract>>;
    getUrl(): string;
    /**
     * Used to configure query
     * @param queryConfig Query configuration
     */
    queryConfig(queryConfig: ISyncInitQueryConfig): this;
    map(json: any): Responses.IInitializeSyncResponse;
}
