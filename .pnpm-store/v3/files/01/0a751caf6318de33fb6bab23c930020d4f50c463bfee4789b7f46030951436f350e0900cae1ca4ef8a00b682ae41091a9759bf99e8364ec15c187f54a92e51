import { BaseQuery } from '../base-query';
export class ViewSubscriptionProjectQuery extends BaseQuery {
    constructor(config, queryService, identifier) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.identifier = identifier;
    }
    toPromise() {
        return this.queryService.viewSubscriptionProjectAsync(this.getUrl(), this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.viewSubscriptionProject(this.identifier);
    }
}
//# sourceMappingURL=view-subscription-project-query.class.js.map