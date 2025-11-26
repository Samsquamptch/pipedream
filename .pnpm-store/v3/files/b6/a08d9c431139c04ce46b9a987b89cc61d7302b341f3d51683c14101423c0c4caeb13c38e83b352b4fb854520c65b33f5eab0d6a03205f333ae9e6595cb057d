import { BaseQuery } from '../base-query';
export class GetEnvironmentCloningStateQuery extends BaseQuery {
    constructor(config, queryService) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
    }
    toPromise() {
        return this.queryService.getEnvironmentCloningStateAsync(this.getUrl(), this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.getEnvironmentCloningStatus();
    }
}
//# sourceMappingURL=get-environment-cloning-state-query.js.map