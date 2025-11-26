"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarkEnvironmentAsProductionQuery = void 0;
const base_query_1 = require("../base-query");
class MarkEnvironmentAsProductionQuery extends base_query_1.BaseQuery {
    constructor(config, queryService, data) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.data = data;
    }
    toPromise() {
        return this.queryService.markEnvironmentAsProductionAsync(this.getUrl(), this.queryConfig, this.data);
    }
    getAction() {
        return this.apiEndpoints.markEnvironmentAsProduction();
    }
}
exports.MarkEnvironmentAsProductionQuery = MarkEnvironmentAsProductionQuery;
//# sourceMappingURL=mark-environment-as-production-query.js.map