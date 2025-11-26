"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModifyContentTypeSnippetQuery = void 0;
const base_query_1 = require("../base-query");
class ModifyContentTypeSnippetQuery extends base_query_1.BaseQuery {
    constructor(config, queryService, identifier, data) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.identifier = identifier;
        this.data = data;
    }
    toPromise() {
        return this.queryService.modifyContentTypeSnippetAsync(this.getUrl(), this.queryConfig, this.data);
    }
    getAction() {
        return this.apiEndpoints.modifyContentTypeSnippet(this.identifier);
    }
}
exports.ModifyContentTypeSnippetQuery = ModifyContentTypeSnippetQuery;
//# sourceMappingURL=modify-content-type-snippet-query.class.js.map