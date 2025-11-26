import { SpaceModels } from '../models';
import { SpaceResponses } from '../responses';
import { BaseMapper } from './base-mapper';
export class SpacesMapper extends BaseMapper {
    mapListingSpacesResponse(response) {
        const items = response.data.map((m) => this.mapSpace(m));
        return new SpaceResponses.SpacesListResponse(super.mapResponseDebug(response), response.data, items);
    }
    mapViewSpaceResponse(response) {
        return new SpaceResponses.ViewSpaceResponse(super.mapResponseDebug(response), response.data, this.mapSpace(response.data));
    }
    mapAddSpaceResponse(response) {
        return new SpaceResponses.AddSpaceResponse(super.mapResponseDebug(response), response.data, this.mapSpace(response.data));
    }
    mapModifySpaceResponse(response) {
        return new SpaceResponses.ModifySpaceResponse(super.mapResponseDebug(response), response.data, this.mapSpace(response.data));
    }
    mapSpace(rawItem) {
        return new SpaceModels.Space({
            codename: rawItem.codename,
            id: rawItem.id,
            name: rawItem.name,
            webSpotlightRootItem: rawItem.web_spotlight_root_item,
            collections: rawItem.collections,
            _raw: rawItem
        });
    }
}
export const spacesMapper = new SpacesMapper();
//# sourceMappingURL=space-mapper.js.map