"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListAssetFoldersQuery = void 0;
const base_query_1 = require("../base-query");
class ListAssetFoldersQuery extends base_query_1.BaseQuery {
    constructor(config, queryService) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
    }
    toPromise() {
        return this.queryService.listAssetFoldersAsync(this.getUrl(), this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.listAssetFolders();
    }
}
exports.ListAssetFoldersQuery = ListAssetFoldersQuery;
//# sourceMappingURL=list-asset-folders.class.js.map