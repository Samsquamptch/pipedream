import { BaseQuery } from '../base-query';
export class ModifyEnvironmentQuery extends BaseQuery {
    constructor(config, queryService, data) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.data = data;
    }
    toPromise() {
        return this.queryService.modifyEnvironmentAsync(this.getUrl(), this.queryConfig, this.data);
    }
    getAction() {
        return this.apiEndpoints.modifyEnvironment();
    }
}
//# sourceMappingURL=modify-environment-query.js.map