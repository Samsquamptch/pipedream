import { IManagementClientConfig } from '../../config';
import { AssetElementsBuilder, AssetModels } from '../../models';
import { AssetResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';
export declare class AddAssetQuery extends BaseQuery<AssetResponses.AddAssetResponse> {
    protected config: IManagementClientConfig;
    protected queryService: ManagementQueryService;
    data: (builder: AssetElementsBuilder) => AssetModels.IAddAssetRequestData;
    constructor(config: IManagementClientConfig, queryService: ManagementQueryService, data: (builder: AssetElementsBuilder) => AssetModels.IAddAssetRequestData);
    toPromise(): Promise<AssetResponses.AddAssetResponse>;
    protected getAction(): string;
}
