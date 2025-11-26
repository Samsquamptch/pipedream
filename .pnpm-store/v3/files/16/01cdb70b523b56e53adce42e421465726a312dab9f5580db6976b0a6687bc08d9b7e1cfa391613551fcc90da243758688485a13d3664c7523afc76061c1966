"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListContentTypesQuery = void 0;
const responses_1 = require("../../responses");
const base_listing_query_1 = require("../base-listing-query");
class ListContentTypesQuery extends base_listing_query_1.BaseListingQuery {
    constructor(config, queryService) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
    }
    toPromise() {
        return this.queryService.listContentTypesAsync(this.getUrl(), this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.listContentTypes();
    }
    allResponseFactory(items, responses) {
        return new responses_1.ContentTypeResponses.ContentTypeListAllResponse({
            items: items,
            responses: responses
        });
    }
}
exports.ListContentTypesQuery = ListContentTypesQuery;
//# sourceMappingURL=list-content-types-query.class.js.map