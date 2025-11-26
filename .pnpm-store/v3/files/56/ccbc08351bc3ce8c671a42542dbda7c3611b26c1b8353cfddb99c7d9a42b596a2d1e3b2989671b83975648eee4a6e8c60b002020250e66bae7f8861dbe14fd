import { BaseQuery } from '../base-query';
export class ViewRoleQuery extends BaseQuery {
    constructor(config, queryService, identifier) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.identifier = identifier;
    }
    toPromise() {
        return this.queryService.viewRoleAsync(this.getUrl(), this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.viewRole(this.identifier);
    }
}
//# sourceMappingURL=view-role-query.class.js.map