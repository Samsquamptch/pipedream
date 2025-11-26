"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListContentTypeSnippetsQuery = void 0;
const responses_1 = require("../../responses");
const base_listing_query_1 = require("../base-listing-query");
class ListContentTypeSnippetsQuery extends base_listing_query_1.BaseListingQuery {
    constructor(config, queryService) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
    }
    toPromise() {
        return this.queryService.listContentTypeSnippetsAsync(this.getUrl(), this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.listContentTypeSnippets();
    }
    allResponseFactory(items, responses) {
        return new responses_1.ContentTypeSnippetResponses.ContentTypeSnippetListAllResponse({
            items: items,
            responses: responses
        });
    }
}
exports.ListContentTypeSnippetsQuery = ListContentTypeSnippetsQuery;
//# sourceMappingURL=list-content-type-snippets-query.class.js.map