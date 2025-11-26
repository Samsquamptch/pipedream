"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddAssetQuery = void 0;
const models_1 = require("../../models");
const base_query_1 = require("../base-query");
class AddAssetQuery extends base_query_1.BaseQuery {
    constructor(config, queryService, data) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.data = data;
    }
    toPromise() {
        return this.queryService.addAssetAsync(this.getUrl(), this.data(models_1.assetElementsBuilder), this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.addAsset();
    }
}
exports.AddAssetQuery = AddAssetQuery;
//# sourceMappingURL=add-asset-query.class.js.map