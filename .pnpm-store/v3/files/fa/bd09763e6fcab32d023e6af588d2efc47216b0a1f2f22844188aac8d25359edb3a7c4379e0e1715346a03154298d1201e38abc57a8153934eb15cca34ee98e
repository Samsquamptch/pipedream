import { BaseQuery } from '../base-query';
export class ViewAssetRenditionQuery extends BaseQuery {
    constructor(config, queryService, assetIdentifier, renditionIdentifier) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.assetIdentifier = assetIdentifier;
        this.renditionIdentifier = renditionIdentifier;
    }
    toPromise() {
        return this.queryService.viewAssetRenditionAsync(this.getUrl(), this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.viewAssetRendition(this.assetIdentifier, this.renditionIdentifier);
    }
}
//# sourceMappingURL=view-assset-rendition-query.class.js.map