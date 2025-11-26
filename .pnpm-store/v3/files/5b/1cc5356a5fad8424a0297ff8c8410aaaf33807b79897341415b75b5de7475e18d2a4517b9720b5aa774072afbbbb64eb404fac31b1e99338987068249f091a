import { IManagementClientConfig } from '../../config';
import { AssetModels } from '../../models';
import { AssetResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';
export declare class UploadAssetFromUrlQuery extends BaseQuery<AssetResponses.AddAssetResponse> {
    protected config: IManagementClientConfig;
    protected queryService: ManagementQueryService;
    data: AssetModels.IUploadAssetFromUrlRequestData;
    constructor(config: IManagementClientConfig, queryService: ManagementQueryService, data: AssetModels.IUploadAssetFromUrlRequestData);
    toPromise(): Promise<AssetResponses.AddAssetResponse>;
    getAddAssetUrl(): string;
    getUploadBinaryFileUrl(): string;
    protected getAction(): string;
}
