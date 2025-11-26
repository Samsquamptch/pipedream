import { BaseQuery } from '../base-query';
export class CloneEnvironmentQuery extends BaseQuery {
    constructor(config, queryService, data) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.data = data;
    }
    toPromise() {
        return this.queryService.cloneEnvironmentAsync(this.getUrl(), this.queryConfig, this.data);
    }
    getAction() {
        return this.apiEndpoints.cloneEnvironment();
    }
}
//# sourceMappingURL=clone-environment-query.js.map