import { ContentTypeResponses } from '../../responses';
import { BaseListingQuery } from '../base-listing-query';
export class ListContentTypesQuery extends BaseListingQuery {
    constructor(config, queryService) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
    }
    toPromise() {
        return this.queryService.listContentTypesAsync(this.getUrl(), this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.listContentTypes();
    }
    allResponseFactory(items, responses) {
        return new ContentTypeResponses.ContentTypeListAllResponse({
            items: items,
            responses: responses
        });
    }
}
//# sourceMappingURL=list-content-types-query.class.js.map