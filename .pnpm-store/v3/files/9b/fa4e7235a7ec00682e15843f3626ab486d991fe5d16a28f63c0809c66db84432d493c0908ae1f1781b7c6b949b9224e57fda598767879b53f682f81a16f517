import { CollectionModels } from '../models';
import { CollectionResponses } from '../responses';
import { BaseMapper } from './base-mapper';
export class CollectionsMapper extends BaseMapper {
    mapListCollectionsResponse(response) {
        const items = response.data.collections.map((m) => this.mapCollection(m));
        return new CollectionResponses.CollectionsListResponse(super.mapResponseDebug(response), response.data, {
            lastModified: response.data.last_modified ? new Date(response.data.last_modified) : undefined,
            collections: items
        });
    }
    mapSetCollectionsResponse(response) {
        const items = response.data.collections.map((m) => this.mapCollection(m));
        return new CollectionResponses.SetCollectionsResponse(super.mapResponseDebug(response), response.data, {
            lastModified: response.data.last_modified ? new Date(response.data.last_modified) : undefined,
            collections: items
        });
    }
    mapCollection(rawCollection) {
        return new CollectionModels.Collection({
            id: rawCollection.id,
            name: rawCollection.name,
            codename: rawCollection.codename,
            _raw: rawCollection
        });
    }
}
export const collectionsMappers = new CollectionsMapper();
//# sourceMappingURL=collections-mapper.js.map