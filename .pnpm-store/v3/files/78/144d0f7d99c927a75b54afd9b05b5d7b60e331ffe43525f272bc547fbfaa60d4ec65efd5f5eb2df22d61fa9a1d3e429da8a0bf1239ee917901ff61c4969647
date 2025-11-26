import { IManagementClientConfig } from '../../config';
import { SubscriptionResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseListingQuery } from '../base-listing-query';
export declare class ListSubscriptionProjectsQuery extends BaseListingQuery<SubscriptionResponses.SubscriptionProjectsListResponse, SubscriptionResponses.SubscriptionProjectsListAllResponse> {
    protected config: IManagementClientConfig;
    protected queryService: ManagementQueryService;
    constructor(config: IManagementClientConfig, queryService: ManagementQueryService);
    toPromise(): Promise<SubscriptionResponses.SubscriptionProjectsListResponse>;
    protected getAction(): string;
    protected allResponseFactory(items: any[], responses: SubscriptionResponses.SubscriptionProjectsListResponse[]): SubscriptionResponses.SubscriptionProjectsListAllResponse;
}
