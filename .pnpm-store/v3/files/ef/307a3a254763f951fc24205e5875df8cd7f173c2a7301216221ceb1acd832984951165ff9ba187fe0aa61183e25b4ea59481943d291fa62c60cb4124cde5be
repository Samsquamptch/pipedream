import { IManagementClientConfig } from '../../config';
import { Identifiers, AssetRenditionModels } from '../../models';
import { AssetRenditionResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';
export declare class AddAssetRenditionQuery extends BaseQuery<AssetRenditionResponses.AddAssetRenditionResponse> {
    protected config: IManagementClientConfig;
    protected queryService: ManagementQueryService;
    assetIdentifier: Identifiers.AssetIdentifier;
    data: AssetRenditionModels.IAddAssetRenditionData;
    constructor(config: IManagementClientConfig, queryService: ManagementQueryService, assetIdentifier: Identifiers.AssetIdentifier, data: AssetRenditionModels.IAddAssetRenditionData);
    toPromise(): Promise<AssetRenditionResponses.AddAssetRenditionResponse>;
    protected getAction(): string;
}
