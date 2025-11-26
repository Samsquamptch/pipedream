import { SubscriptionResponses } from '../../responses';
import { BaseListingQuery } from '../base-listing-query';
export class ListSubscriptionUsersQuery extends BaseListingQuery {
    constructor(config, queryService) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
    }
    toPromise() {
        return this.queryService.litSubscriptionUsersAsync(this.getUrl(), this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.listSubscriptionUsers();
    }
    allResponseFactory(items, responses) {
        return new SubscriptionResponses.SubscriptionUsersListAllResponse({
            items: items,
            responses: responses
        });
    }
}
//# sourceMappingURL=list-subscription-users-query.class.js.map