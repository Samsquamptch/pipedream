"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewContentTypeSnippetQuery = void 0;
const base_query_1 = require("../base-query");
class ViewContentTypeSnippetQuery extends base_query_1.BaseQuery {
    constructor(config, queryService, identifier) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.identifier = identifier;
    }
    toPromise() {
        return this.queryService.viewContentTypeSnippetAsync(this.getUrl(), this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.viewContentTypeSnippet(this.identifier);
    }
}
exports.ViewContentTypeSnippetQuery = ViewContentTypeSnippetQuery;
//# sourceMappingURL=view-content-type-snippet-query.class.js.map