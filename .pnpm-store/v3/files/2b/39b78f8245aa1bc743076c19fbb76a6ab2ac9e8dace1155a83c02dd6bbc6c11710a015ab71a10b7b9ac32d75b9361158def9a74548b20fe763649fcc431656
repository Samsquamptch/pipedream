import { BaseQuery } from '../base-query';
export class ListAssetFoldersQuery extends BaseQuery {
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
//# sourceMappingURL=list-asset-folders.class.js.map