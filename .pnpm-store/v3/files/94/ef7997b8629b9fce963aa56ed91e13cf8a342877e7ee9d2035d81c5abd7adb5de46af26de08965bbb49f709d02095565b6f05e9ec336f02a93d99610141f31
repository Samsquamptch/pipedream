import { BaseQuery } from '../base-query';
export class EnvironmentInformationQuery extends BaseQuery {
    constructor(config, queryService) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
    }
    toPromise() {
        return this.queryService.environmentInformationAsync(this.getUrl(), this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.environmentInformation();
    }
}
//# sourceMappingURL=environment-information-query.class.js.map