"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contentTypeMapper = exports.ContentTypeMapper = void 0;
const models_1 = require("../models");
const responses_1 = require("../responses");
const base_mapper_1 = require("./base-mapper");
const elements_mapper_1 = require("./elements-mapper");
class ContentTypeMapper extends base_mapper_1.BaseMapper {
    mapListingResponse(response) {
        return new responses_1.ContentTypeResponses.ContentTypeListResponse(super.mapResponseDebug(response), response.data, {
            items: response.data.types.map(m => this.mapContentType(m)),
            pagination: super.mapPagination(response.data.pagination)
        });
    }
    mapViewContentTypeResponse(response) {
        return new responses_1.ContentTypeResponses.ViewContentTypeResponse(super.mapResponseDebug(response), response.data, this.mapContentType(response.data));
    }
    mapModifyContentTypeResponse(response) {
        return new responses_1.ContentTypeResponses.ModifyContentTypeResponse(super.mapResponseDebug(response), response.data, this.mapContentType(response.data));
    }
    mapAddContentTypeResponse(response) {
        return new responses_1.ContentTypeResponses.AddContentTypeResponse(super.mapResponseDebug(response), response.data, this.mapContentType(response.data));
    }
    mapContentType(rawContentType) {
        return new models_1.ContentTypeModels.ContentType({
            codename: rawContentType.codename,
            id: rawContentType.id,
            name: rawContentType.name,
            elements: elements_mapper_1.elementsMapper.mapTypeElements(rawContentType.elements),
            lastModified: new Date(rawContentType.last_modified),
            externalId: rawContentType.external_id,
            contentGroups: rawContentType.content_groups ? rawContentType.content_groups.map(m => this.mapContentTypeGroup(m)) : undefined,
            _raw: rawContentType
        });
    }
    mapContentTypeGroup(rawContentTypeGroup) {
        return new models_1.ContentTypeModels.ContentTypeGroup({
            name: rawContentTypeGroup.name,
            codename: rawContentTypeGroup.codename,
            externalId: rawContentTypeGroup.external_id,
            id: rawContentTypeGroup.id
        });
    }
}
exports.ContentTypeMapper = ContentTypeMapper;
exports.contentTypeMapper = new ContentTypeMapper();
//# sourceMappingURL=content-type-mapper.js.map