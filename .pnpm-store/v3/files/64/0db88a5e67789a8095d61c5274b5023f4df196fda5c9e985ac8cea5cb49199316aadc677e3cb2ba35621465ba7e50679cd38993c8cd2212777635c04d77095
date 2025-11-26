import { BaseQuery } from '../base-query';
export class ViewContentItemQuery extends BaseQuery {
    constructor(config, queryService, identifier) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.identifier = identifier;
    }
    toPromise() {
        return this.queryService.viewContentItemAsync(this.getUrl(), this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.viewContentItem(this.identifier);
    }
}
//# sourceMappingURL=view-content-item-query.class.js.map