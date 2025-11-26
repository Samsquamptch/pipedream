import { AssetRenditionModels } from '../models';
import { AssetRenditionResponses } from '../responses';
import { BaseMapper } from './base-mapper';
export class AssetRenditionMapper extends BaseMapper {
    mapListAssetRenditionsResponse(response) {
        return new AssetRenditionResponses.AssetRenditionsListResponse(super.mapResponseDebug(response), response.data, {
            items: response.data.asset_renditions.map((m) => this.mapAssetRendition(m)),
            pagination: super.mapPagination(response.data.pagination)
        });
    }
    mapViewAssetRenditionResponse(response) {
        return new AssetRenditionResponses.ViewAssetRenditionResponse(super.mapResponseDebug(response), response.data, this.mapAssetRendition(response.data));
    }
    mapModifyAssetRenditionResponse(response) {
        return new AssetRenditionResponses.ModifyAssetRenditionResponse(super.mapResponseDebug(response), response.data, this.mapAssetRendition(response.data));
    }
    mapAddAssetRenditionResponse(response) {
        return new AssetRenditionResponses.AddAssetRenditionResponse(super.mapResponseDebug(response), response.data, this.mapAssetRendition(response.data));
    }
    mapAssetRendition(raw) {
        return new AssetRenditionModels.AssetRendition({
            assetId: raw.asset_id,
            externalId: raw.external_id,
            lastModified: new Date(raw.last_modified),
            renditionId: raw.rendition_id,
            transformation: {
                fit: raw.transformation.fit,
                height: raw.transformation.height,
                mode: raw.transformation.mode,
                width: raw.transformation.width,
                x: raw.transformation.x,
                y: raw.transformation.y,
                customHeight: raw.transformation.custom_height,
                customWidth: raw.transformation.custom_width
            },
            _raw: raw
        });
    }
}
export const assetRenditionMapper = new AssetRenditionMapper();
//# sourceMappingURL=asset-rendition-mapper.js.map