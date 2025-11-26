"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListLanguageVariantsOfItemQuery = void 0;
const base_query_1 = require("../base-query");
class ListLanguageVariantsOfItemQuery extends base_query_1.BaseQuery {
    constructor(config, queryService, identifier) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.identifier = identifier;
    }
    toPromise() {
        return this.queryService.listLanguageVariantsOfItemAsync(this.getUrl(), this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.listLanguageVariantsOfItem(this.identifier);
    }
}
exports.ListLanguageVariantsOfItemQuery = ListLanguageVariantsOfItemQuery;
//# sourceMappingURL=list-language-variants-of-item-query.class.js.map