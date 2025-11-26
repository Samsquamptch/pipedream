"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListLanguageVariantsBySpaceQuery = void 0;
const responses_1 = require("../../responses");
const base_listing_query_1 = require("../base-listing-query");
class ListLanguageVariantsBySpaceQuery extends base_listing_query_1.BaseListingQuery {
    constructor(config, queryService, identifier) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.identifier = identifier;
    }
    toPromise() {
        return this.queryService.listLanguageVariantsBySpaceAsync(this.getUrl(), this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.listLanguageVariantsBySpace(this.identifier);
    }
    allResponseFactory(items, responses) {
        return new responses_1.LanguageVariantResponses.ListAllLanguageVariantsBySpaceResponse({
            items: items,
            responses: responses
        });
    }
}
exports.ListLanguageVariantsBySpaceQuery = ListLanguageVariantsBySpaceQuery;
//# sourceMappingURL=list-language-variants-by-space-query.class.js.map