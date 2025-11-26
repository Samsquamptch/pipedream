"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListLanguageVariantsByCollectionQuery = void 0;
const responses_1 = require("../../responses");
const base_listing_query_1 = require("../base-listing-query");
class ListLanguageVariantsByCollectionQuery extends base_listing_query_1.BaseListingQuery {
    constructor(config, queryService, identifier) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.identifier = identifier;
    }
    toPromise() {
        return this.queryService.listLanguageVariantsByCollectionAsync(this.getUrl(), this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.listLanguageVariantsByCollection(this.identifier);
    }
    allResponseFactory(items, responses) {
        return new responses_1.LanguageVariantResponses.ListAllLanguageVariantsByCollectionResponse({
            items: items,
            responses: responses
        });
    }
}
exports.ListLanguageVariantsByCollectionQuery = ListLanguageVariantsByCollectionQuery;
//# sourceMappingURL=list-language-variants-by-collection-query.class.js.map