import { Identifiers } from '../models';
export class AssetIdentifierQuery {
    constructor(config, queryService, buildResult) {
        this.config = config;
        this.queryService = queryService;
        this.buildResult = buildResult;
    }
    /**
     * Gets asset using internal Id
     * @param id Internal Id of the asset
     */
    byAssetId(id) {
        return this.buildResult(this.config, this.queryService, new Identifiers.AssetIdentifier(Identifiers.AssetIdentifierEnum.InternalId, id));
    }
    /**
     * Gets asset using external Id
     * @param id External Id of the asset
     */
    byAssetExternalId(id) {
        return this.buildResult(this.config, this.queryService, new Identifiers.AssetIdentifier(Identifiers.AssetIdentifierEnum.ExternalId, id));
    }
    /**
     * Gets asset using codename
     * @param id Codename of the asset
     */
    byAssetCodename(id) {
        return this.buildResult(this.config, this.queryService, new Identifiers.AssetIdentifier(Identifiers.AssetIdentifierEnum.Codename, id));
    }
}
//# sourceMappingURL=asset-identifier-query.class.js.map