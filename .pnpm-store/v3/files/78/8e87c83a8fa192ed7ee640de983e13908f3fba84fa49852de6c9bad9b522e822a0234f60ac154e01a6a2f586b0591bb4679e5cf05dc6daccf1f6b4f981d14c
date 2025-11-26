"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListAssetRenditionsQuery = void 0;
const responses_1 = require("../../responses");
const base_listing_query_1 = require("../base-listing-query");
class ListAssetRenditionsQuery extends base_listing_query_1.BaseListingQuery {
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
        return new responses_1.AssetRenditionResponses.AssetRenditionsListAllResponse({
            items: items,
            responses: responses
        });
    }
}
exports.ListAssetRenditionsQuery = ListAssetRenditionsQuery;
//# sourceMappingURL=list-asset-renditions-query.class.js.map