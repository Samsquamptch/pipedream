import { AssetResponses } from '../../responses';
import { BaseListingQuery } from '../base-listing-query';
export class ListAssetsQuery extends BaseListingQuery {
    constructor(config, queryService) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
    }
    toPromise() {
        return this.queryService.listAssetsAsync(this.getUrl(), this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.listAssets();
    }
    allResponseFactory(items, responses) {
        return new AssetResponses.AssetsListAllResponse({
            items: items,
            responses: responses
        });
    }
}
//# sourceMappingURL=list-assets-query.class.js.map