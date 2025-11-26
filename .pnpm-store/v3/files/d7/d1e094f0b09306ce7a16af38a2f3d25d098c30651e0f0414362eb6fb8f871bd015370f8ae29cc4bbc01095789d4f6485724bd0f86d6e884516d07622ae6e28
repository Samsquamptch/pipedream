import { BaseQuery } from '../base-query';
export class ModifyAssetRenditionQuery extends BaseQuery {
    constructor(config, queryService, assetIdentifier, renditionIdentifier, data) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.assetIdentifier = assetIdentifier;
        this.renditionIdentifier = renditionIdentifier;
        this.data = data;
    }
    toPromise() {
        return this.queryService.modifyAssetRenditionAsync(this.getUrl(), this.queryConfig, this.data);
    }
    getAction() {
        return this.apiEndpoints.modifyAssetRendition(this.assetIdentifier, this.renditionIdentifier);
    }
}
//# sourceMappingURL=modify-asset-rendition-query.class.js.map