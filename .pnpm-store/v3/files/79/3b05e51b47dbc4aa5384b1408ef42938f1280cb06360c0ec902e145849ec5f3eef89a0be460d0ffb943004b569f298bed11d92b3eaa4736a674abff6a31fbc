import { IManagementClientConfig } from '../../config';
import { AssetFolderModels } from '../../models';
import { AssetFolderResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';
export declare class AddAssetFoldersQuery extends BaseQuery<AssetFolderResponses.AddAssetFoldersResponse> {
    protected config: IManagementClientConfig;
    protected queryService: ManagementQueryService;
    data: AssetFolderModels.IAddAssetFoldersData;
    constructor(config: IManagementClientConfig, queryService: ManagementQueryService, data: AssetFolderModels.IAddAssetFoldersData);
    toPromise(): Promise<AssetFolderResponses.AddAssetFoldersResponse>;
    protected getAction(): string;
}
