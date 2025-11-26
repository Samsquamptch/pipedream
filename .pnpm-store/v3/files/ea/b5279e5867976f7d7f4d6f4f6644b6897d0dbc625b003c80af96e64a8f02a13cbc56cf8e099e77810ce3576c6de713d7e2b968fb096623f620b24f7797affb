"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetEnvironmentCloningStateQuery = void 0;
const base_query_1 = require("../base-query");
class GetEnvironmentCloningStateQuery extends base_query_1.BaseQuery {
    constructor(config, queryService) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
    }
    toPromise() {
        return this.queryService.getEnvironmentCloningStateAsync(this.getUrl(), this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.getEnvironmentCloningStatus();
    }
}
exports.GetEnvironmentCloningStateQuery = GetEnvironmentCloningStateQuery;
//# sourceMappingURL=get-environment-cloning-state-query.js.map