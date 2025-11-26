import { IManagementClientConfig } from '../../config';
import { AssetFolderResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';
export declare class ListAssetFoldersQuery extends BaseQuery<AssetFolderResponses.AssetFoldersListResponse> {
    protected config: IManagementClientConfig;
    protected queryService: ManagementQueryService;
    constructor(config: IManagementClientConfig, queryService: ManagementQueryService);
    toPromise(): Promise<AssetFolderResponses.AssetFoldersListResponse>;
    protected getAction(): string;
}
