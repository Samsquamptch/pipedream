"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddAssetFoldersQuery = void 0;
const base_query_1 = require("../base-query");
class AddAssetFoldersQuery extends base_query_1.BaseQuery {
    constructor(config, queryService, data) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.data = data;
    }
    toPromise() {
        return this.queryService.addAssetFoldersAsync(this.getUrl(), this.queryConfig, this.data);
    }
    getAction() {
        return this.apiEndpoints.addAssetFolders();
    }
}
exports.AddAssetFoldersQuery = AddAssetFoldersQuery;
//# sourceMappingURL=add-asset-folders.class.js.map