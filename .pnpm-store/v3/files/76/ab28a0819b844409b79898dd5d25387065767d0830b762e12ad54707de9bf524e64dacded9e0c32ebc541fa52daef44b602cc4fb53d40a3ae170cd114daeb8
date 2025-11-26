import { IResponse } from '@kontent-ai/core-sdk';
import { AssetContracts } from '../contracts';
import { AssetModels } from '../models';
import { AssetResponses } from '../responses';
import { BaseMapper } from './base-mapper';
export declare class AssetsMapper extends BaseMapper {
    mapListingAssetsResponse(response: IResponse<AssetContracts.IAssetsListingResponseContract>): AssetResponses.AssetsListResponse;
    mapViewAssetResponse(response: IResponse<AssetContracts.IAssetModelContract>): AssetResponses.ViewAssetResponse;
    mapUploadBinaryFileResponse(response: IResponse<AssetContracts.IUploadBinaryFileResponseContract>): AssetResponses.UploadBinaryFileResponse;
    mapAddAssetResponse(response: IResponse<AssetContracts.IAddAssetResponseContract>): AssetResponses.AddAssetResponse;
    mapUpdateAssetResponse(response: IResponse<AssetContracts.IUpdateAssetResponseContract>): AssetResponses.UpdateAssetResponse;
    mapUpsertAssetResponse(response: IResponse<AssetContracts.IUpsertAssetResponseContract>): AssetResponses.UpsertAssertResponse;
    mapAssetReference(rawFileReference: AssetContracts.IAssetFileReferenceContract): AssetModels.AssetFileReference;
    mapAsset(rawAsset: AssetContracts.IAssetModelContract): AssetModels.Asset;
}
export declare const assetsMapper: AssetsMapper;
