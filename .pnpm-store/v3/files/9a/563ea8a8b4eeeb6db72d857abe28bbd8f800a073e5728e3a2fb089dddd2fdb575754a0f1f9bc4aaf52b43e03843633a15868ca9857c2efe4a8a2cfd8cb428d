"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModifyAssetRenditionQuery = void 0;
const base_query_1 = require("../base-query");
class ModifyAssetRenditionQuery extends base_query_1.BaseQuery {
    constructor(config, queryService, assetIdentifier, renditionIdentifier, data) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.assetIdentifier = assetIdentifier;
        this.renditionIdentifier = renditionIdentifier;
        this.data = data;
    }
    toPromise() {
        return this.queryService.modifyAssetRenditionAsync(this.getUrl(), this.queryConfig, this.data);
    }
    getAction() {
        return this.apiEndpoints.modifyAssetRendition(this.assetIdentifier, this.renditionIdentifier);
    }
}
exports.ModifyAssetRenditionQuery = ModifyAssetRenditionQuery;
//# sourceMappingURL=modify-asset-rendition-query.class.js.map