"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListSubscriptionUsersQuery = void 0;
const responses_1 = require("../../responses");
const base_listing_query_1 = require("../base-listing-query");
class ListSubscriptionUsersQuery extends base_listing_query_1.BaseListingQuery {
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
        return new responses_1.SubscriptionResponses.SubscriptionUsersListAllResponse({
            items: items,
            responses: responses
        });
    }
}
exports.ListSubscriptionUsersQuery = ListSubscriptionUsersQuery;
//# sourceMappingURL=list-subscription-users-query.class.js.map