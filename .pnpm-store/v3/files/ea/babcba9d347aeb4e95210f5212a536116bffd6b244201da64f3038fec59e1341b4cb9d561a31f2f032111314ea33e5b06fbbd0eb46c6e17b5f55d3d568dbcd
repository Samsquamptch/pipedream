import { BaseQuery } from '../base-query';
export class ViewSpaceQuery extends BaseQuery {
    constructor(config, queryService, identifier) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.identifier = identifier;
    }
    toPromise() {
        return this.queryService.viewSpaceAsync(this.getUrl(), this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.viewSpace(this.identifier);
    }
}
//# sourceMappingURL=view-space-query.class.js.map