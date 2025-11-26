import { IManagementClientConfig } from '../../config';
import { AssetModels } from '../../models';
import { AssetResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';
export declare class UploadBinaryFileQuery extends BaseQuery<AssetResponses.UploadBinaryFileResponse> {
    protected config: IManagementClientConfig;
    protected queryService: ManagementQueryService;
    data: AssetModels.IUploadBinaryFileRequestData;
    constructor(config: IManagementClientConfig, queryService: ManagementQueryService, data: AssetModels.IUploadBinaryFileRequestData);
    toPromise(): Promise<AssetResponses.UploadBinaryFileResponse>;
    protected getAction(): string;
}
