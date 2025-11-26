"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteContentTypeSnippetQuery = void 0;
const base_query_1 = require("../base-query");
class DeleteContentTypeSnippetQuery extends base_query_1.BaseQuery {
    constructor(config, queryService, identifier) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.identifier = identifier;
    }
    toPromise() {
        return this.queryService.deleteContentTypeSnippetAsync(this.getUrl(), this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.deleteContentTypeSnippet(this.identifier);
    }
}
exports.DeleteContentTypeSnippetQuery = DeleteContentTypeSnippetQuery;
//# sourceMappingURL=delete-content-type-snippet-query.class.js.map