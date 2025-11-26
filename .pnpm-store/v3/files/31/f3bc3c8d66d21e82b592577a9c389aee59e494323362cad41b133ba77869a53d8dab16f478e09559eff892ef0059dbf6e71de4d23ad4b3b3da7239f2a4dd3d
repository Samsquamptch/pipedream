"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListLanguageVariantsOfContentTypeWithComponentsQuery = void 0;
const responses_1 = require("../../responses");
const base_listing_query_1 = require("../base-listing-query");
class ListLanguageVariantsOfContentTypeWithComponentsQuery extends base_listing_query_1.BaseListingQuery {
    constructor(config, queryService, identifier) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.identifier = identifier;
    }
    toPromise() {
        return this.queryService.listLanguageVariantsOfContentTypeWithComponentsAsync(this.getUrl(), this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.listLanguageVariantsOfContentTypeWithComponents(this.identifier);
    }
    allResponseFactory(items, responses) {
        return new responses_1.LanguageVariantResponses.ListAllLanguageVariantsOfContentTypeWithComponentsResponse({
            items: items,
            responses: responses
        });
    }
}
exports.ListLanguageVariantsOfContentTypeWithComponentsQuery = ListLanguageVariantsOfContentTypeWithComponentsQuery;
//# sourceMappingURL=list-language-variants-of-content-type-with-components-query.class.js.map