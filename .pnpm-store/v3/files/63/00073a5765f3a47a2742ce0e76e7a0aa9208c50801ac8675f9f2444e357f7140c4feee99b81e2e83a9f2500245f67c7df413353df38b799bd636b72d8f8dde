"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteEnvironmentQuery = void 0;
const base_query_1 = require("../base-query");
class DeleteEnvironmentQuery extends base_query_1.BaseQuery {
    constructor(config, queryService) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
    }
    toPromise() {
        return this.queryService.deleteEnvironmentAsync(this.getUrl(), this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.deleteEnvironment();
    }
}
exports.DeleteEnvironmentQuery = DeleteEnvironmentQuery;
//# sourceMappingURL=delete-environment-query.js.map