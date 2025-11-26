import { BaseQuery } from '../base-query';
export class ListWorkflowsQuery extends BaseQuery {
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
//# sourceMappingURL=list-workflows-query.class.js.map