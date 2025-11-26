import { BaseQuery } from '../base-query';
export class DeleteWorkflowQuery extends BaseQuery {
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
//# sourceMappingURL=delete-workflow-query.class.js.map