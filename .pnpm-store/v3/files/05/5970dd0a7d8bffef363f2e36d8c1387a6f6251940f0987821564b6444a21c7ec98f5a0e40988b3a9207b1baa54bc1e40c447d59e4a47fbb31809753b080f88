import { BaseQuery } from '../base-query';
export class MarkEnvironmentAsProductionQuery extends BaseQuery {
    constructor(config, queryService, data) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.data = data;
    }
    toPromise() {
        return this.queryService.markEnvironmentAsProductionAsync(this.getUrl(), this.queryConfig, this.data);
    }
    getAction() {
        return this.apiEndpoints.markEnvironmentAsProduction();
    }
}
//# sourceMappingURL=mark-environment-as-production-query.js.map