import { BaseQuery } from '../base-query';
export class ViewAssetsQuery extends BaseQuery {
    constructor(config, queryService, identifier) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.identifier = identifier;
    }
    toPromise() {
        return this.queryService.viewAssetAsync(this.getUrl(), this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.viewAsset(this.identifier);
    }
}
//# sourceMappingURL=view-assets-query.js.map