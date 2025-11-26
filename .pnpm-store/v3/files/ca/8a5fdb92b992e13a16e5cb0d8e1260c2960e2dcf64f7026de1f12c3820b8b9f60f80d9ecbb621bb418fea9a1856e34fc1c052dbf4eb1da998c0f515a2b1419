import { BaseQuery } from '../base-query';
export class AddAssetRenditionQuery extends BaseQuery {
    constructor(config, queryService, assetIdentifier, data) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.assetIdentifier = assetIdentifier;
        this.data = data;
    }
    toPromise() {
        return this.queryService.addAssetRenditionAsync(this.getUrl(), this.queryConfig, this.data);
    }
    getAction() {
        return this.apiEndpoints.addAssetRendition(this.assetIdentifier);
    }
}
//# sourceMappingURL=add-asset-rendition-query.class.js.map