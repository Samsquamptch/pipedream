"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteSpaceQuery = void 0;
const base_query_1 = require("../base-query");
class DeleteSpaceQuery extends base_query_1.BaseQuery {
    constructor(config, queryService, identifier) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.identifier = identifier;
    }
    toPromise() {
        return this.queryService.deleteSpaceAsync(this.getUrl(), this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.deleteSpace(this.identifier);
    }
}
exports.DeleteSpaceQuery = DeleteSpaceQuery;
//# sourceMappingURL=delete-space-query.class.js.map