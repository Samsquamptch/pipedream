import { assetElementsBuilder } from '../../models';
import { BaseQuery } from '../base-query';
export class AddAssetQuery extends BaseQuery {
    constructor(config, queryService, data) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.data = data;
    }
    toPromise() {
        return this.queryService.addAssetAsync(this.getUrl(), this.data(assetElementsBuilder), this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.addAsset();
    }
}
//# sourceMappingURL=add-asset-query.class.js.map