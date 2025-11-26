"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contentTypeSnippetMapper = exports.ContentTypeSnippetMapper = void 0;
const models_1 = require("../models");
const responses_1 = require("../responses");
const base_mapper_1 = require("./base-mapper");
const elements_mapper_1 = require("./elements-mapper");
class ContentTypeSnippetMapper extends base_mapper_1.BaseMapper {
    mapListingResponse(response) {
        return new responses_1.ContentTypeSnippetResponses.ContentTypeSnippetListResponse(super.mapResponseDebug(response), response.data, {
            items: response.data.snippets.map(m => this.mapContentTypeSnippet(m)),
            pagination: super.mapPagination(response.data.pagination)
        });
    }
    mapViewContentTypeSnippetResponse(response) {
        return new responses_1.ContentTypeSnippetResponses.ViewContentTypeSnippetResponse(super.mapResponseDebug(response), response.data, this.mapContentTypeSnippet(response.data));
    }
    mapAddContentTypeSnippetResponse(response) {
        return new responses_1.ContentTypeSnippetResponses.AddContentTypeSnippetResponse(super.mapResponseDebug(response), response.data, this.mapContentTypeSnippet(response.data));
    }
    mapModifyContentTypeSnippetResponse(response) {
        return new responses_1.ContentTypeSnippetResponses.ModifyContentTypeSnippetResponse(super.mapResponseDebug(response), response.data, this.mapContentTypeSnippet(response.data));
    }
    mapContentTypeSnippet(rawContentType) {
        return new models_1.ContentTypeSnippetModels.ContentTypeSnippet({
            codename: rawContentType.codename,
            id: rawContentType.id,
            name: rawContentType.name,
            elements: elements_mapper_1.elementsMapper.mapTypeElements(rawContentType.elements),
            lastModified: new Date(rawContentType.last_modified),
            externalId: rawContentType.external_id,
            _raw: rawContentType
        });
    }
}
exports.ContentTypeSnippetMapper = ContentTypeSnippetMapper;
exports.contentTypeSnippetMapper = new ContentTypeSnippetMapper();
//# sourceMappingURL=content-type-snippet-mapper.js.map