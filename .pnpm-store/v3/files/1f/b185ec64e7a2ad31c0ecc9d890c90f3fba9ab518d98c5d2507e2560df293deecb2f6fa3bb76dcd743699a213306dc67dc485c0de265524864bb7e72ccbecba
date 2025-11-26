"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteContentTypeQuery = void 0;
const base_query_1 = require("../base-query");
class DeleteContentTypeQuery extends base_query_1.BaseQuery {
    constructor(config, queryService, identifier) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.identifier = identifier;
    }
    toPromise() {
        return this.queryService.deleteContentTypeAsync(this.getUrl(), this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.deleteContentType(this.identifier);
    }
}
exports.DeleteContentTypeQuery = DeleteContentTypeQuery;
//# sourceMappingURL=delete-content-type-query.class.js.map