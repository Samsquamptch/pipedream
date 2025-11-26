import { BaseQuery } from '../base-query';
export class ViewContentTypeSnippetQuery extends BaseQuery {
    constructor(config, queryService, identifier) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.identifier = identifier;
    }
    toPromise() {
        return this.queryService.viewContentTypeSnippetAsync(this.getUrl(), this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.viewContentTypeSnippet(this.identifier);
    }
}
//# sourceMappingURL=view-content-type-snippet-query.class.js.map