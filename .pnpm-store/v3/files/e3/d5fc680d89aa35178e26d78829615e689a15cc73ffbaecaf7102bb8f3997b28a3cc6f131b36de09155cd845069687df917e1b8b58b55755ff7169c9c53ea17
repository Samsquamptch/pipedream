"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddContentTypeSnippetQuery = void 0;
const models_1 = require("../../models");
const base_query_1 = require("../base-query");
class AddContentTypeSnippetQuery extends base_query_1.BaseQuery {
    constructor(config, queryService, data) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.data = data;
    }
    toPromise() {
        return this.queryService.addContentTypeSnippetAsync(this.getUrl(), this.data(models_1.contentTypeSnippetElementsBuilder), this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.addContentTypeSnippet();
    }
}
exports.AddContentTypeSnippetQuery = AddContentTypeSnippetQuery;
//# sourceMappingURL=add-content-type-snippet-query.class.js.map