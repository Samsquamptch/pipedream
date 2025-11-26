import { BaseQuery } from '../base-query';
export class DeleteContentTypeSnippetQuery extends BaseQuery {
    constructor(config, queryService, identifier) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.identifier = identifier;
    }
    toPromise() {
        return this.queryService.deleteContentTypeSnippetAsync(this.getUrl(), this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.deleteContentTypeSnippet(this.identifier);
    }
}
//# sourceMappingURL=delete-content-type-snippet-query.class.js.map