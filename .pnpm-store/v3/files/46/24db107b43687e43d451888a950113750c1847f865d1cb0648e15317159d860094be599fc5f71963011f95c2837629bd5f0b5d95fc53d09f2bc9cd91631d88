import { IManagementClientConfig } from '../config';
import { Identifiers } from '../models';
import { ManagementQueryService } from '../services';
export declare class AssetIdentifierQuery<TResult> {
    protected config: IManagementClientConfig;
    protected queryService: ManagementQueryService;
    protected buildResult: (config: IManagementClientConfig, queryService: ManagementQueryService, identifier: Identifiers.AssetIdentifier) => TResult;
    constructor(config: IManagementClientConfig, queryService: ManagementQueryService, buildResult: (config: IManagementClientConfig, queryService: ManagementQueryService, identifier: Identifiers.AssetIdentifier) => TResult);
    /**
     * Gets asset using internal Id
     * @param id Internal Id of the asset
     */
    byAssetId(id: string): TResult;
    /**
     * Gets asset using external Id
     * @param id External Id of the asset
     */
    byAssetExternalId(id: string): TResult;
    /**
     * Gets asset using codename
     * @param id Codename of the asset
     */
    byAssetCodename(id: string): TResult;
}
