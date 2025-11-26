import { ContentTypeSnippetModels } from '../models';
import { ContentTypeSnippetResponses } from '../responses';
import { BaseMapper } from './base-mapper';
import { elementsMapper } from './elements-mapper';
export class ContentTypeSnippetMapper extends BaseMapper {
    mapListingResponse(response) {
        return new ContentTypeSnippetResponses.ContentTypeSnippetListResponse(super.mapResponseDebug(response), response.data, {
            items: response.data.snippets.map(m => this.mapContentTypeSnippet(m)),
            pagination: super.mapPagination(response.data.pagination)
        });
    }
    mapViewContentTypeSnippetResponse(response) {
        return new ContentTypeSnippetResponses.ViewContentTypeSnippetResponse(super.mapResponseDebug(response), response.data, this.mapContentTypeSnippet(response.data));
    }
    mapAddContentTypeSnippetResponse(response) {
        return new ContentTypeSnippetResponses.AddContentTypeSnippetResponse(super.mapResponseDebug(response), response.data, this.mapContentTypeSnippet(response.data));
    }
    mapModifyContentTypeSnippetResponse(response) {
        return new ContentTypeSnippetResponses.ModifyContentTypeSnippetResponse(super.mapResponseDebug(response), response.data, this.mapContentTypeSnippet(response.data));
    }
    mapContentTypeSnippet(rawContentType) {
        return new ContentTypeSnippetModels.ContentTypeSnippet({
            codename: rawContentType.codename,
            id: rawContentType.id,
            name: rawContentType.name,
            elements: elementsMapper.mapTypeElements(rawContentType.elements),
            lastModified: new Date(rawContentType.last_modified),
            externalId: rawContentType.external_id,
            _raw: rawContentType
        });
    }
}
export const contentTypeSnippetMapper = new ContentTypeSnippetMapper();
//# sourceMappingURL=content-type-snippet-mapper.js.map