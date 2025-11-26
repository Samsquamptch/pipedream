import { BaseQuery } from '../base-query';
export class ViewContentTypeQuery extends BaseQuery {
    constructor(config, queryService, identifier) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.identifier = identifier;
    }
    toPromise() {
        return this.queryService.viewContentTypeAsync(this.getUrl(), this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.viewContentType(this.identifier);
    }
}
//# sourceMappingURL=view-content-type-query.class.js.map