"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListWorkflowsQuery = void 0;
const base_query_1 = require("../base-query");
class ListWorkflowsQuery extends base_query_1.BaseQuery {
    constructor(config, queryService) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
    }
    toPromise() {
        return this.queryService.listWorkflowsAsync(this.getUrl(), this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.listWorkflows();
    }
}
exports.ListWorkflowsQuery = ListWorkflowsQuery;
//# sourceMappingURL=list-workflows-query.class.js.map