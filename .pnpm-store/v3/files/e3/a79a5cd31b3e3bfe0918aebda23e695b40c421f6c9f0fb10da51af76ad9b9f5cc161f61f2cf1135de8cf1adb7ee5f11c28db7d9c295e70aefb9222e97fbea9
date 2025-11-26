"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListLanguagesQuery = void 0;
const responses_1 = require("../../responses");
const base_listing_query_1 = require("../base-listing-query");
class ListLanguagesQuery extends base_listing_query_1.BaseListingQuery {
    constructor(config, queryService) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
    }
    toPromise() {
        return this.queryService.listLanguagesAsync(this.getUrl(), this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.listLanguages();
    }
    allResponseFactory(items, responses) {
        return new responses_1.LanguageResponses.ListAllLanguagesResponse({
            items: items,
            responses: responses
        });
    }
}
exports.ListLanguagesQuery = ListLanguagesQuery;
//# sourceMappingURL=list-languages-query.class.js.map