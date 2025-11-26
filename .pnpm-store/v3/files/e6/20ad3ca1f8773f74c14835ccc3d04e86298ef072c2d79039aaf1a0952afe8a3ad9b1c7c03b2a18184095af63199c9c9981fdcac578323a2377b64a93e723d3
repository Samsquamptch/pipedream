"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewAssetRenditionQuery = void 0;
const base_query_1 = require("../base-query");
class ViewAssetRenditionQuery extends base_query_1.BaseQuery {
    constructor(config, queryService, assetIdentifier, renditionIdentifier) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.assetIdentifier = assetIdentifier;
        this.renditionIdentifier = renditionIdentifier;
    }
    toPromise() {
        return this.queryService.viewAssetRenditionAsync(this.getUrl(), this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.viewAssetRendition(this.assetIdentifier, this.renditionIdentifier);
    }
}
exports.ViewAssetRenditionQuery = ViewAssetRenditionQuery;
//# sourceMappingURL=view-assset-rendition-query.class.js.map