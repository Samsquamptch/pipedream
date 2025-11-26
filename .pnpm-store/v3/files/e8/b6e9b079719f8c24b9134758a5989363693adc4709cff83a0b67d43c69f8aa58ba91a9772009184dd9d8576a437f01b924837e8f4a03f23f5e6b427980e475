import { BaseQuery } from '../base-query';
export class CheckEnvironmentValidationQuery extends BaseQuery {
    constructor(config, queryService, identifier) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.identifier = identifier;
    }
    toPromise() {
        return this.queryService.checkEnvironmentValidationAsync(this.getUrl(), this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.checkEnvironmentValidation(this.identifier);
    }
}
//# sourceMappingURL=check-environment-validation-query.class.js.map