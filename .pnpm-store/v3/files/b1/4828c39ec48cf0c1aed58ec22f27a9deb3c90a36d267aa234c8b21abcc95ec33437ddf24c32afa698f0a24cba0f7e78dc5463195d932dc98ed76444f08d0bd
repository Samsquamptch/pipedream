"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteAssetQuery = void 0;
const base_query_1 = require("../base-query");
class DeleteAssetQuery extends base_query_1.BaseQuery {
    constructor(config, queryService, identifier) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.identifier = identifier;
    }
    toPromise() {
        return this.queryService.deleteAssetAsync(this.getUrl(), this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.deleteAsset(this.identifier);
    }
}
exports.DeleteAssetQuery = DeleteAssetQuery;
//# sourceMappingURL=delete-asset-query.class.js.map