import { BaseQuery } from '../base-query';
export class AddWorkflowQuery extends BaseQuery {
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
//# sourceMappingURL=add-workflow-query.class.js.map