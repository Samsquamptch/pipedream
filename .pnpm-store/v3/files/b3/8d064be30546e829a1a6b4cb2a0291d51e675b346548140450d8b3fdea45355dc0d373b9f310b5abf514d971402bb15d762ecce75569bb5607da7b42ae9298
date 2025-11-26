import { BaseQuery } from '../base-query';
export class StartEnvironmentValidationQuery extends BaseQuery {
    constructor(config, queryService) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
    }
    toPromise() {
        return this.queryService.startEnvironmentValidationAsync(this.getUrl(), this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.startProjectValidation();
    }
}
//# sourceMappingURL=start-project-validation-query.class.js.map