"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListAssetsQuery = void 0;
const responses_1 = require("../../responses");
const base_listing_query_1 = require("../base-listing-query");
class ListAssetsQuery extends base_listing_query_1.BaseListingQuery {
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
        return new responses_1.AssetResponses.AssetsListAllResponse({
            items: items,
            responses: responses
        });
    }
}
exports.ListAssetsQuery = ListAssetsQuery;
//# sourceMappingURL=list-assets-query.class.js.map