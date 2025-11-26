import { BaseQuery } from '../base-query';
export class ModifyContentTypeSnippetQuery extends BaseQuery {
    constructor(config, queryService, identifier, data) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.identifier = identifier;
        this.data = data;
    }
    toPromise() {
        return this.queryService.modifyContentTypeSnippetAsync(this.getUrl(), this.queryConfig, this.data);
    }
    getAction() {
        return this.apiEndpoints.modifyContentTypeSnippet(this.identifier);
    }
}
//# sourceMappingURL=modify-content-type-snippet-query.class.js.map