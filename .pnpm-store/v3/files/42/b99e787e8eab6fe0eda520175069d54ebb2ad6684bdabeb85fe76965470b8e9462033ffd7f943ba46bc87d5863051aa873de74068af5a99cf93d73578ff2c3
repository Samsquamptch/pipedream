"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListSubscriptionProjectsQuery = void 0;
const responses_1 = require("../../responses");
const base_listing_query_1 = require("../base-listing-query");
class ListSubscriptionProjectsQuery extends base_listing_query_1.BaseListingQuery {
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
        return new responses_1.SubscriptionResponses.SubscriptionProjectsListAllResponse({
            items: items,
            responses: responses
        });
    }
}
exports.ListSubscriptionProjectsQuery = ListSubscriptionProjectsQuery;
//# sourceMappingURL=list-subscription-projects-query.class.js.map