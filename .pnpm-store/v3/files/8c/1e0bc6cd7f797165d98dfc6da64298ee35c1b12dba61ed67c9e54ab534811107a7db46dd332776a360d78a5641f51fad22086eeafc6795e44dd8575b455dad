"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewAssetsQuery = void 0;
const base_query_1 = require("../base-query");
class ViewAssetsQuery extends base_query_1.BaseQuery {
    constructor(config, queryService, identifier) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.identifier = identifier;
    }
    toPromise() {
        return this.queryService.viewAssetAsync(this.getUrl(), this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.viewAsset(this.identifier);
    }
}
exports.ViewAssetsQuery = ViewAssetsQuery;
//# sourceMappingURL=view-assets-query.js.map