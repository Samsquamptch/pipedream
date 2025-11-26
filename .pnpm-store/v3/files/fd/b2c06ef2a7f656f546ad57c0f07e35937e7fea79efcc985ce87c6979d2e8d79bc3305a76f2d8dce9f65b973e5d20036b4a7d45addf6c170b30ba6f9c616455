import { BaseQuery } from '../base-query';
export class DeleteEnvironmentQuery extends BaseQuery {
    constructor(config, queryService) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
    }
    toPromise() {
        return this.queryService.deleteEnvironmentAsync(this.getUrl(), this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.deleteEnvironment();
    }
}
//# sourceMappingURL=delete-environment-query.js.map