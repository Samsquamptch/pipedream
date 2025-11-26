"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewLanguageQuery = void 0;
const base_query_1 = require("../base-query");
class ViewLanguageQuery extends base_query_1.BaseQuery {
    constructor(config, queryService, identifier) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.identifier = identifier;
    }
    toPromise() {
        return this.queryService.viewLanguageAsync(this.getUrl(), this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.viewLanguage(this.identifier);
    }
}
exports.ViewLanguageQuery = ViewLanguageQuery;
//# sourceMappingURL=view-language-query.class.js.map