"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddWorkflowQuery = void 0;
const base_query_1 = require("../base-query");
class AddWorkflowQuery extends base_query_1.BaseQuery {
    constructor(config, queryService, data) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.data = data;
    }
    toPromise() {
        return this.queryService.addWorkflowAsync(this.getUrl(), this.queryConfig, this.data);
    }
    getAction() {
        return this.apiEndpoints.addWorkflow();
    }
}
exports.AddWorkflowQuery = AddWorkflowQuery;
//# sourceMappingURL=add-workflow-query.class.js.map