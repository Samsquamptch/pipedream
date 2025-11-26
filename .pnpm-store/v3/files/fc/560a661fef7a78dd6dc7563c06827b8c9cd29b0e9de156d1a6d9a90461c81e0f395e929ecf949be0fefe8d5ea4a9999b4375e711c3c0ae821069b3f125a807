"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModifyAssetFoldersQuery = void 0;
const base_query_1 = require("../base-query");
class ModifyAssetFoldersQuery extends base_query_1.BaseQuery {
    constructor(config, queryService, data) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.data = data;
    }
    toPromise() {
        return this.queryService.modifyAssetFoldersAsync(this.getUrl(), this.queryConfig, this.data);
    }
    getAction() {
        return this.apiEndpoints.modifyAssetFolders();
    }
}
exports.ModifyAssetFoldersQuery = ModifyAssetFoldersQuery;
//# sourceMappingURL=modify-asset-folders.class.js.map