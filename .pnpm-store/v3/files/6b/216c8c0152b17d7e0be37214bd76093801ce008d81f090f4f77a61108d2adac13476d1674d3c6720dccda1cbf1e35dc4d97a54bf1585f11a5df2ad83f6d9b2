import { ContentItemResponses } from '../../responses';
import { BaseListingQuery } from '../base-listing-query';
export class ListContentItemsQuery extends BaseListingQuery {
    constructor(config, queryService) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
    }
    toPromise() {
        return this.queryService.listContentItemsAsync(this.getUrl(), this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.items();
    }
    allResponseFactory(items, responses) {
        return new ContentItemResponses.ContentItemsListAllResponse({
            items: items,
            responses: responses
        });
    }
}
//# sourceMappingURL=list-content-items-query.class.js.map