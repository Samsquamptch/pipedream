import { IManagementClientConfig } from '../../config';
import { Identifiers, AssetRenditionModels } from '../../models';
import { AssetRenditionResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';
export declare class ModifyAssetRenditionQuery extends BaseQuery<AssetRenditionResponses.ModifyAssetRenditionResponse> {
    protected config: IManagementClientConfig;
    protected queryService: ManagementQueryService;
    assetIdentifier: Identifiers.AssetIdentifier;
    renditionIdentifier: Identifiers.RenditionIdentifier;
    data: AssetRenditionModels.IModifyAssetRenditionData;
    constructor(config: IManagementClientConfig, queryService: ManagementQueryService, assetIdentifier: Identifiers.AssetIdentifier, renditionIdentifier: Identifiers.RenditionIdentifier, data: AssetRenditionModels.IModifyAssetRenditionData);
    toPromise(): Promise<AssetRenditionResponses.ModifyAssetRenditionResponse>;
    protected getAction(): string;
}
