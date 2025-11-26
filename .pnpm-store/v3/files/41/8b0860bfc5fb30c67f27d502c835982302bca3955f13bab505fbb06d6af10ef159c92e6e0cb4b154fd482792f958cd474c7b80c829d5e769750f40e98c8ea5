"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListContentItemsQuery = void 0;
const responses_1 = require("../../responses");
const base_listing_query_1 = require("../base-listing-query");
class ListContentItemsQuery extends base_listing_query_1.BaseListingQuery {
    constructor(config, queryService) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
    }
    toPromise() {
        return this.queryService.listContentItemsAsync(this.getUrl(), this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.items();
    }
    allResponseFactory(items, responses) {
        return new responses_1.ContentItemResponses.ContentItemsListAllResponse({
            items: items,
            responses: responses
        });
    }
}
exports.ListContentItemsQuery = ListContentItemsQuery;
//# sourceMappingURL=list-content-items-query.class.js.map