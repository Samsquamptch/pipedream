import { BaseQuery } from '../base-query';
export class DeleteAssetQuery extends BaseQuery {
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
//# sourceMappingURL=delete-asset-query.class.js.map