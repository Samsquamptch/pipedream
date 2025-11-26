import { BaseQuery } from '../base-query';
export class DeleteContentTypeQuery extends BaseQuery {
    constructor(config, queryService, identifier) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.identifier = identifier;
    }
    toPromise() {
        return this.queryService.deleteContentTypeAsync(this.getUrl(), this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.deleteContentType(this.identifier);
    }
}
//# sourceMappingURL=delete-content-type-query.class.js.map