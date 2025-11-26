"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.spacesMapper = exports.SpacesMapper = void 0;
const models_1 = require("../models");
const responses_1 = require("../responses");
const base_mapper_1 = require("./base-mapper");
class SpacesMapper extends base_mapper_1.BaseMapper {
    mapListingSpacesResponse(response) {
        const items = response.data.map((m) => this.mapSpace(m));
        return new responses_1.SpaceResponses.SpacesListResponse(super.mapResponseDebug(response), response.data, items);
    }
    mapViewSpaceResponse(response) {
        return new responses_1.SpaceResponses.ViewSpaceResponse(super.mapResponseDebug(response), response.data, this.mapSpace(response.data));
    }
    mapAddSpaceResponse(response) {
        return new responses_1.SpaceResponses.AddSpaceResponse(super.mapResponseDebug(response), response.data, this.mapSpace(response.data));
    }
    mapModifySpaceResponse(response) {
        return new responses_1.SpaceResponses.ModifySpaceResponse(super.mapResponseDebug(response), response.data, this.mapSpace(response.data));
    }
    mapSpace(rawItem) {
        return new models_1.SpaceModels.Space({
            codename: rawItem.codename,
            id: rawItem.id,
            name: rawItem.name,
            webSpotlightRootItem: rawItem.web_spotlight_root_item,
            collections: rawItem.collections,
            _raw: rawItem
        });
    }
}
exports.SpacesMapper = SpacesMapper;
exports.spacesMapper = new SpacesMapper();
//# sourceMappingURL=space-mapper.js.map