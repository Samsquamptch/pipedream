"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddAssetRenditionQuery = void 0;
const base_query_1 = require("../base-query");
class AddAssetRenditionQuery extends base_query_1.BaseQuery {
    constructor(config, queryService, assetIdentifier, data) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.assetIdentifier = assetIdentifier;
        this.data = data;
    }
    toPromise() {
        return this.queryService.addAssetRenditionAsync(this.getUrl(), this.queryConfig, this.data);
    }
    getAction() {
        return this.apiEndpoints.addAssetRendition(this.assetIdentifier);
    }
}
exports.AddAssetRenditionQuery = AddAssetRenditionQuery;
//# sourceMappingURL=add-asset-rendition-query.class.js.map