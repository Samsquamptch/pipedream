"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assetRenditionMapper = exports.AssetRenditionMapper = void 0;
const models_1 = require("../models");
const responses_1 = require("../responses");
const base_mapper_1 = require("./base-mapper");
class AssetRenditionMapper extends base_mapper_1.BaseMapper {
    mapListAssetRenditionsResponse(response) {
        return new responses_1.AssetRenditionResponses.AssetRenditionsListResponse(super.mapResponseDebug(response), response.data, {
            items: response.data.asset_renditions.map((m) => this.mapAssetRendition(m)),
            pagination: super.mapPagination(response.data.pagination)
        });
    }
    mapViewAssetRenditionResponse(response) {
        return new responses_1.AssetRenditionResponses.ViewAssetRenditionResponse(super.mapResponseDebug(response), response.data, this.mapAssetRendition(response.data));
    }
    mapModifyAssetRenditionResponse(response) {
        return new responses_1.AssetRenditionResponses.ModifyAssetRenditionResponse(super.mapResponseDebug(response), response.data, this.mapAssetRendition(response.data));
    }
    mapAddAssetRenditionResponse(response) {
        return new responses_1.AssetRenditionResponses.AddAssetRenditionResponse(super.mapResponseDebug(response), response.data, this.mapAssetRendition(response.data));
    }
    mapAssetRendition(raw) {
        return new models_1.AssetRenditionModels.AssetRendition({
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
exports.AssetRenditionMapper = AssetRenditionMapper;
exports.assetRenditionMapper = new AssetRenditionMapper();
//# sourceMappingURL=asset-rendition-mapper.js.map