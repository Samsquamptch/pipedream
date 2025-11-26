"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModifyEnvironmentQuery = void 0;
const base_query_1 = require("../base-query");
class ModifyEnvironmentQuery extends base_query_1.BaseQuery {
    constructor(config, queryService, data) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.data = data;
    }
    toPromise() {
        return this.queryService.modifyEnvironmentAsync(this.getUrl(), this.queryConfig, this.data);
    }
    getAction() {
        return this.apiEndpoints.modifyEnvironment();
    }
}
exports.ModifyEnvironmentQuery = ModifyEnvironmentQuery;
//# sourceMappingURL=modify-environment-query.js.map