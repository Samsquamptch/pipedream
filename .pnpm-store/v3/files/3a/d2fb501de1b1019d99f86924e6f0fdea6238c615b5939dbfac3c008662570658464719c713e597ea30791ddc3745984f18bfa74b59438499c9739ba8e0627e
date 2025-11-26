"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateWorkflowQuery = void 0;
const base_query_1 = require("../base-query");
class UpdateWorkflowQuery extends base_query_1.BaseQuery {
    constructor(config, queryService, data, identifier) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.data = data;
        this.identifier = identifier;
    }
    toPromise() {
        return this.queryService.updateWorkflowAsync(this.getUrl(), this.queryConfig, this.data);
    }
    getAction() {
        return this.apiEndpoints.updateWorkflow(this.identifier);
    }
}
exports.UpdateWorkflowQuery = UpdateWorkflowQuery;
//# sourceMappingURL=update-workflow-query.class.js.map