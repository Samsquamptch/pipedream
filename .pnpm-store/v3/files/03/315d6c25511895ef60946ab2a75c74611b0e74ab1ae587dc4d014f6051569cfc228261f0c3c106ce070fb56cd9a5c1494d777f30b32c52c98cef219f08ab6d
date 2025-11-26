import { SubscriptionResponses } from '../../responses';
import { BaseListingQuery } from '../base-listing-query';
export class ListSubscriptionProjectsQuery extends BaseListingQuery {
    constructor(config, queryService) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
    }
    toPromise() {
        return this.queryService.listSubscriptionProjectsAsync(this.getUrl(), this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.listSubscriptionProjects();
    }
    allResponseFactory(items, responses) {
        return new SubscriptionResponses.SubscriptionProjectsListAllResponse({
            items: items,
            responses: responses
        });
    }
}
//# sourceMappingURL=list-subscription-projects-query.class.js.map