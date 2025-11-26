import { SharedContracts } from './shared-contracts';
export declare namespace AssetRenditionContracts {
    interface IAssetRenditionContract {
        rendition_id: string;
        asset_id: string;
        external_id: string;
        last_modified: string;
        transformation: IAssetRenditionTransformationContract;
    }
    interface IAssetRenditionTransformationContract {
        mode: 'rect';
        fit: 'clip';
        custom_width?: number;
        custom_height?: number;
        x: number;
        y: number;
        width: number;
        height: number;
    }
    interface IListRenditionResponseContract {
        asset_renditions: IAssetRenditionContract[];
        pagination: SharedContracts.IPaginationModelContract;
    }
    interface IAddAssetRenditionResponseContract extends IAssetRenditionContract {
    }
    interface IModifyAssetRenditionResponseContract extends IAssetRenditionContract {
    }
    interface IViewRenditionResponseContract extends IAssetRenditionContract {
    }
}
