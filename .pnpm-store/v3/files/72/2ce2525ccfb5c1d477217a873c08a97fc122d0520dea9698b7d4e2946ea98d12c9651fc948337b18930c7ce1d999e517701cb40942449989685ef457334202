import { BaseQuery } from '../base-query';
export class UpdateWorkflowQuery extends BaseQuery {
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
//# sourceMappingURL=update-workflow-query.class.js.map