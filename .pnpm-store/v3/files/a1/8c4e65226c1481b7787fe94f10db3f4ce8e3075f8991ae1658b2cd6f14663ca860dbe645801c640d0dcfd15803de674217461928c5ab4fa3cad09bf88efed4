import { IManagementClientConfig } from '../../config';
import { AssetElementsBuilder, AssetModels, Identifiers } from '../../models';
import { AssetResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';
export declare class UpsertAssetQuery extends BaseQuery<AssetResponses.UpdateAssetResponse> {
    protected config: IManagementClientConfig;
    protected queryService: ManagementQueryService;
    identifier: Identifiers.AssetIdentifier;
    data: (builder: AssetElementsBuilder) => AssetModels.IUpsertAssetRequestData;
    constructor(config: IManagementClientConfig, queryService: ManagementQueryService, identifier: Identifiers.AssetIdentifier, data: (builder: AssetElementsBuilder) => AssetModels.IUpsertAssetRequestData);
    toPromise(): Promise<AssetResponses.UpsertAssertResponse>;
    protected getAction(): string;
}
