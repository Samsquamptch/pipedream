import { BaseQuery } from '../base-query';
export class ModifyAssetFoldersQuery extends BaseQuery {
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
//# sourceMappingURL=modify-asset-folders.class.js.map