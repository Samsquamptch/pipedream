"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewContentTypeQuery = void 0;
const base_query_1 = require("../base-query");
class ViewContentTypeQuery extends base_query_1.BaseQuery {
    constructor(config, queryService, identifier) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.identifier = identifier;
    }
    toPromise() {
        return this.queryService.viewContentTypeAsync(this.getUrl(), this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.viewContentType(this.identifier);
    }
}
exports.ViewContentTypeQuery = ViewContentTypeQuery;
//# sourceMappingURL=view-content-type-query.class.js.map