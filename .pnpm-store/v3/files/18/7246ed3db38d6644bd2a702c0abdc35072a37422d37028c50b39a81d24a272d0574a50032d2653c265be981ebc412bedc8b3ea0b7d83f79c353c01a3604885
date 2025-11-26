"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertAssetQuery = void 0;
const models_1 = require("../../models");
const base_query_1 = require("../base-query");
class UpsertAssetQuery extends base_query_1.BaseQuery {
    constructor(config, queryService, identifier, data) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.identifier = identifier;
        this.data = data;
    }
    toPromise() {
        return this.queryService.upsertAssetAsync(this.getUrl(), this.data(models_1.assetElementsBuilder), this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.upsertAsset(this.identifier);
    }
}
exports.UpsertAssetQuery = UpsertAssetQuery;
//# sourceMappingURL=upsert-asset-query.class.js.map