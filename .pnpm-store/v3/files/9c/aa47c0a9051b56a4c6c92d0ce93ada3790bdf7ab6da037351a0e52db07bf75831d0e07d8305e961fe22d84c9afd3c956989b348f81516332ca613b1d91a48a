"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListTaxonomiesQuery = void 0;
const responses_1 = require("../../responses");
const base_listing_query_1 = require("../base-listing-query");
class ListTaxonomiesQuery extends base_listing_query_1.BaseListingQuery {
    constructor(config, queryService) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
    }
    toPromise() {
        return this.queryService.listTaxonomiesAsync(this.getUrl(), this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.listTaxonomies();
    }
    allResponseFactory(items, responses) {
        return new responses_1.TaxonomyResponses.ListAllTaxonomiesResponse({
            items: items,
            responses: responses
        });
    }
}
exports.ListTaxonomiesQuery = ListTaxonomiesQuery;
//# sourceMappingURL=list-taxonomies-query.class.js.map