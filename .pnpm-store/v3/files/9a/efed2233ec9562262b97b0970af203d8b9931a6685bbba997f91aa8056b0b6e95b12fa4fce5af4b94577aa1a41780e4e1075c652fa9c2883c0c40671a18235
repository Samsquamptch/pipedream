import { BaseQuery } from '../base-query';
export class ViewSubscriptionUserQuery extends BaseQuery {
    constructor(config, queryService, identifier) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.identifier = identifier;
    }
    toPromise() {
        return this.queryService.viewSubscriptionUserAsync(this.getUrl(), this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.viewSubscriptionUser(this.identifier);
    }
}
//# sourceMappingURL=view-subscription-user-query.class.js.map