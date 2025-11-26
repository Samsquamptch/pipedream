import { ContentTypeSnippetContracts } from '../../contracts';
import { ContentTypeSnippetModels, SharedModels } from '../../models';
import { BaseResponses } from '../base-responses';
export declare namespace ContentTypeSnippetResponses {
    class ContentTypeSnippetListResponse extends BaseResponses.BaseContentManagementListResponse<ContentTypeSnippetContracts.IContentTypeSnippetListResponseContract, ContentTypeSnippetModels.ContentTypeSnippet> {
        constructor(debug: BaseResponses.IContentManagementResponseDebug, rawData: ContentTypeSnippetContracts.IContentTypeSnippetListResponseContract, data: {
            items: ContentTypeSnippetModels.ContentTypeSnippet[];
            pagination: SharedModels.Pagination;
        });
    }
    class ContentTypeSnippetListAllResponse extends BaseResponses.ContentManagementListAllResponse<ContentTypeSnippetListResponse, ContentTypeSnippetModels.ContentTypeSnippet> {
        constructor(data: {
            items: ContentTypeSnippetModels.ContentTypeSnippet[];
            responses: ContentTypeSnippetListResponse[];
        });
    }
    class ViewContentTypeSnippetResponse extends BaseResponses.BaseContentManagementResponse<ContentTypeSnippetContracts.IViewContentTypeSnippetResponseContract, ContentTypeSnippetModels.ContentTypeSnippet> {
        constructor(debug: BaseResponses.IContentManagementResponseDebug, rawData: ContentTypeSnippetContracts.IViewContentTypeSnippetResponseContract, data: ContentTypeSnippetModels.ContentTypeSnippet);
    }
    class AddContentTypeSnippetResponse extends BaseResponses.BaseContentManagementResponse<ContentTypeSnippetContracts.IAddContentTypeSnippetResponseContract, ContentTypeSnippetModels.ContentTypeSnippet> {
        constructor(debug: BaseResponses.IContentManagementResponseDebug, rawData: ContentTypeSnippetContracts.IAddContentTypeSnippetResponseContract, data: ContentTypeSnippetModels.ContentTypeSnippet);
    }
    class ModifyContentTypeSnippetResponse extends BaseResponses.BaseContentManagementResponse<ContentTypeSnippetContracts.IModifyContentTypeSnippetResponseContract, ContentTypeSnippetModels.ContentTypeSnippet> {
        constructor(debug: BaseResponses.IContentManagementResponseDebug, rawData: ContentTypeSnippetContracts.IModifyContentTypeSnippetResponseContract, data: ContentTypeSnippetModels.ContentTypeSnippet);
    }
}
