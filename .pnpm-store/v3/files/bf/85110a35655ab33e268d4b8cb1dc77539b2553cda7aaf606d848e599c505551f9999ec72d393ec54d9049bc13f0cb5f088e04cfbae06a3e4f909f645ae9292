"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.collectionsMappers = exports.CollectionsMapper = void 0;
const models_1 = require("../models");
const responses_1 = require("../responses");
const base_mapper_1 = require("./base-mapper");
class CollectionsMapper extends base_mapper_1.BaseMapper {
    mapListCollectionsResponse(response) {
        const items = response.data.collections.map((m) => this.mapCollection(m));
        return new responses_1.CollectionResponses.CollectionsListResponse(super.mapResponseDebug(response), response.data, {
            lastModified: response.data.last_modified ? new Date(response.data.last_modified) : undefined,
            collections: items
        });
    }
    mapSetCollectionsResponse(response) {
        const items = response.data.collections.map((m) => this.mapCollection(m));
        return new responses_1.CollectionResponses.SetCollectionsResponse(super.mapResponseDebug(response), response.data, {
            lastModified: response.data.last_modified ? new Date(response.data.last_modified) : undefined,
            collections: items
        });
    }
    mapCollection(rawCollection) {
        return new models_1.CollectionModels.Collection({
            id: rawCollection.id,
            name: rawCollection.name,
            codename: rawCollection.codename,
            _raw: rawCollection
        });
    }
}
exports.CollectionsMapper = CollectionsMapper;
exports.collectionsMappers = new CollectionsMapper();
//# sourceMappingURL=collections-mapper.js.map