import { ContentTypeSnippetResponses } from '../../responses';
import { BaseListingQuery } from '../base-listing-query';
export class ListContentTypeSnippetsQuery extends BaseListingQuery {
    constructor(config, queryService) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
    }
    toPromise() {
        return this.queryService.listContentTypeSnippetsAsync(this.getUrl(), this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.listContentTypeSnippets();
    }
    allResponseFactory(items, responses) {
        return new ContentTypeSnippetResponses.ContentTypeSnippetListAllResponse({
            items: items,
            responses: responses
        });
    }
}
//# sourceMappingURL=list-content-type-snippets-query.class.js.map