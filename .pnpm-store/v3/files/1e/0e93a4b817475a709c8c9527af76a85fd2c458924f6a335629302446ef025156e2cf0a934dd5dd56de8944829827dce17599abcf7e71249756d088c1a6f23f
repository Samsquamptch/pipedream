import { IManagementClientConfig } from '../config/imanagement-client-config.interface';
import { IContentManagementListQueryConfig } from '../models';
import { BaseResponses } from '../responses';
import { ManagementQueryService } from '../services';
import { BaseQuery } from './base-query';
export declare abstract class BaseListingQuery<TResponse extends BaseResponses.IContentManagementListResponse, TAllResponse extends BaseResponses.IContentManagementListAllResponse> extends BaseQuery<TResponse> {
    protected config: IManagementClientConfig;
    protected queryService: ManagementQueryService;
    protected readonly xContinuationHeaderName: string;
    protected listQueryConfig?: IContentManagementListQueryConfig<TResponse>;
    constructor(config: IManagementClientConfig, queryService: ManagementQueryService);
    /**
     * Configuration for list queries
     * @param config List configuration
     */
    withListQueryConfig(config?: IContentManagementListQueryConfig<TResponse>): this;
    /**
     * Sets the 'x-continuation' header value. This can be used for fetching next pages.
     * @param token Value from continuation_token property
     */
    xContinuationToken(token: string): this;
    /**
     * Query to get all items. Uses paging data and may execute multiple HTTP requests depending on number of items
     */
    toAllPromise(): Promise<TAllResponse>;
    protected abstract allResponseFactory(items: any[], responses: TResponse[]): TAllResponse;
}
