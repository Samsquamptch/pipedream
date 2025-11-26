import { assetElementsBuilder } from '../../models';
import { BaseQuery } from '../base-query';
export class UpsertAssetQuery extends BaseQuery {
    constructor(config, queryService, identifier, data) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.identifier = identifier;
        this.data = data;
    }
    toPromise() {
        return this.queryService.upsertAssetAsync(this.getUrl(), this.data(assetElementsBuilder), this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.upsertAsset(this.identifier);
    }
}
//# sourceMappingURL=upsert-asset-query.class.js.map