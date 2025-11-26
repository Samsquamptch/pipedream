import { AssetRenditionResponses } from '../../responses';
import { BaseListingQuery } from '../base-listing-query';
export class ListAssetRenditionsQuery extends BaseListingQuery {
    constructor(config, queryService, identifier) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.identifier = identifier;
    }
    toPromise() {
        return this.queryService.listAssetRenditionsAsync(this.getUrl(), this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.listAssetRenditions(this.identifier);
    }
    allResponseFactory(items, responses) {
        return new AssetRenditionResponses.AssetRenditionsListAllResponse({
            items: items,
            responses: responses
        });
    }
}
//# sourceMappingURL=list-asset-renditions-query.class.js.map