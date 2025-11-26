import { IManagementClientConfig } from '../../config';
import { SubscriptionResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseListingQuery } from '../base-listing-query';
export declare class ListSubscriptionUsersQuery extends BaseListingQuery<SubscriptionResponses.SubscriptionUsersListResponse, SubscriptionResponses.SubscriptionUsersListAllResponse> {
    protected config: IManagementClientConfig;
    protected queryService: ManagementQueryService;
    constructor(config: IManagementClientConfig, queryService: ManagementQueryService);
    toPromise(): Promise<SubscriptionResponses.SubscriptionUsersListResponse>;
    protected getAction(): string;
    protected allResponseFactory(items: any[], responses: SubscriptionResponses.SubscriptionUsersListResponse[]): SubscriptionResponses.SubscriptionUsersListAllResponse;
}
