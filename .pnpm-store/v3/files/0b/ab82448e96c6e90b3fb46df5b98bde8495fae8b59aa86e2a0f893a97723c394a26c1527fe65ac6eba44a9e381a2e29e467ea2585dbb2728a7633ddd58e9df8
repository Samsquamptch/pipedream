"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloneEnvironmentQuery = void 0;
const base_query_1 = require("../base-query");
class CloneEnvironmentQuery extends base_query_1.BaseQuery {
    constructor(config, queryService, data) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.data = data;
    }
    toPromise() {
        return this.queryService.cloneEnvironmentAsync(this.getUrl(), this.queryConfig, this.data);
    }
    getAction() {
        return this.apiEndpoints.cloneEnvironment();
    }
}
exports.CloneEnvironmentQuery = CloneEnvironmentQuery;
//# sourceMappingURL=clone-environment-query.js.map