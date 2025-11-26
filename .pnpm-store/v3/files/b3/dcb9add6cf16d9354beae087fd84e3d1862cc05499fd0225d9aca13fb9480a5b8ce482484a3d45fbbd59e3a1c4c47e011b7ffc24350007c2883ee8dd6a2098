"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListLanguageVariantsOfContentTypeQuery = void 0;
const responses_1 = require("../../responses");
const base_listing_query_1 = require("../base-listing-query");
class ListLanguageVariantsOfContentTypeQuery extends base_listing_query_1.BaseListingQuery {
    constructor(config, queryService, identifier) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.identifier = identifier;
    }
    toPromise() {
        return this.queryService.listLanguageVariantsOfContentTypeAsync(this.getUrl(), this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.listLanguageVariantsOfContentType(this.identifier);
    }
    allResponseFactory(items, responses) {
        return new responses_1.LanguageVariantResponses.ListAllLanguageVariantsOfContentTypeResponse({
            items: items,
            responses: responses
        });
    }
}
exports.ListLanguageVariantsOfContentTypeQuery = ListLanguageVariantsOfContentTypeQuery;
//# sourceMappingURL=list-language-variants-of-content-type-query.class.js.map