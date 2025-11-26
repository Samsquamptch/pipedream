import { contentTypeSnippetElementsBuilder } from '../../models';
import { BaseQuery } from '../base-query';
export class AddContentTypeSnippetQuery extends BaseQuery {
    constructor(config, queryService, data) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.data = data;
    }
    toPromise() {
        return this.queryService.addContentTypeSnippetAsync(this.getUrl(), this.data(contentTypeSnippetElementsBuilder), this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.addContentTypeSnippet();
    }
}
//# sourceMappingURL=add-content-type-snippet-query.class.js.map