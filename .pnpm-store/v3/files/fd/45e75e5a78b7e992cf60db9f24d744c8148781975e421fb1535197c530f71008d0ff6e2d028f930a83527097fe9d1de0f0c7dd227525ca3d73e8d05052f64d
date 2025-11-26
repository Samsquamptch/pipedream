import { BaseQuery } from '../base-query';
export class AddAssetFoldersQuery extends BaseQuery {
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
//# sourceMappingURL=add-asset-folders.class.js.map