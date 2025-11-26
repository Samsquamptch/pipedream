import { SharedModels } from '../shared/shared-models';
import { AssetRenditionContracts } from '../../contracts';
export declare namespace AssetRenditionModels {
    interface IAssetRenditionTransformation {
        mode: 'rect';
        fit: 'clip';
        customWidth?: number;
        customHeight?: number;
        x: number;
        y: number;
        width: number;
        height: number;
    }
    class AssetRendition implements SharedModels.IBaseModel<AssetRenditionContracts.IAssetRenditionContract> {
        renditionId: string;
        assetId: string;
        externalId: string;
        lastModified: Date;
        transformation: IAssetRenditionTransformation;
        _raw: AssetRenditionContracts.IAssetRenditionContract;
        constructor(data: {
            renditionId: string;
            assetId: string;
            externalId: string;
            lastModified: Date;
            transformation: IAssetRenditionTransformation;
            _raw: AssetRenditionContracts.IAssetRenditionContract;
        });
    }
    interface IAddAssetRenditionData {
        external_id?: string;
        transformation: AssetRenditionContracts.IAssetRenditionTransformationContract;
    }
    interface IModifyAssetRenditionData {
        transformation: AssetRenditionContracts.IAssetRenditionTransformationContract;
    }
}
