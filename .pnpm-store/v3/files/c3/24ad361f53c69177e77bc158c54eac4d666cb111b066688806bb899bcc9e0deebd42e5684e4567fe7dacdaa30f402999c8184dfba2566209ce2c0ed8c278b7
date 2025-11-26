import { AssetContracts } from '../../contracts';
import { AssetModels, SharedModels } from '../../models';
import { BaseResponses } from '../base-responses';
export declare namespace AssetResponses {
    class AssetsListResponse extends BaseResponses.BaseContentManagementListResponse<AssetContracts.IAssetsListingResponseContract, AssetModels.Asset> {
        constructor(debug: BaseResponses.IContentManagementResponseDebug, rawData: AssetContracts.IAssetsListingResponseContract, data: {
            items: AssetModels.Asset[];
            pagination: SharedModels.Pagination;
        });
    }
    class AssetsListAllResponse extends BaseResponses.ContentManagementListAllResponse<AssetsListResponse, AssetModels.Asset> {
        constructor(data: {
            items: AssetModels.Asset[];
            responses: AssetsListResponse[];
        });
    }
    class ViewAssetResponse extends BaseResponses.BaseContentManagementResponse<AssetContracts.IAssetModelContract, AssetModels.Asset> {
        constructor(debug: BaseResponses.IContentManagementResponseDebug, rawData: AssetContracts.IAssetModelContract, data: AssetModels.Asset);
    }
    class UploadBinaryFileResponse extends BaseResponses.BaseContentManagementResponse<AssetContracts.IUploadBinaryFileResponseContract, AssetModels.AssetFileReference> {
        constructor(debug: BaseResponses.IContentManagementResponseDebug, rawData: AssetContracts.IUploadBinaryFileResponseContract, data: AssetModels.AssetFileReference);
    }
    class AddAssetResponse extends BaseResponses.BaseContentManagementResponse<AssetContracts.IAddAssetResponseContract, AssetModels.Asset> {
        constructor(debug: BaseResponses.IContentManagementResponseDebug, rawData: AssetContracts.IAddAssetResponseContract, data: AssetModels.Asset);
    }
    class UpdateAssetResponse extends BaseResponses.BaseContentManagementResponse<AssetContracts.IUpdateAssetResponseContract, AssetModels.Asset> {
        constructor(debug: BaseResponses.IContentManagementResponseDebug, rawData: AssetContracts.IUpdateAssetResponseContract, data: AssetModels.Asset);
    }
    class UpsertAssertResponse extends BaseResponses.BaseContentManagementResponse<AssetContracts.IUpsertAssetResponseContract, AssetModels.Asset> {
        constructor(debug: BaseResponses.IContentManagementResponseDebug, rawData: AssetContracts.IUpsertAssetResponseContract, data: AssetModels.Asset);
    }
}
