"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteWorkflowQuery = void 0;
const base_query_1 = require("../base-query");
class DeleteWorkflowQuery extends base_query_1.BaseQuery {
    constructor(config, queryService, identifier) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.identifier = identifier;
    }
    toPromise() {
        return this.queryService.deleteWorkflowAsync(this.getUrl(), this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.deleteWorkflow(this.identifier);
    }
}
exports.DeleteWorkflowQuery = DeleteWorkflowQuery;
//# sourceMappingURL=delete-workflow-query.class.js.map