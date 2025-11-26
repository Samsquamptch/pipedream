import { ContentTypeContracts } from '../../contracts';
import { ContentTypeModels, SharedModels } from '../../models';
import { BaseResponses } from '../base-responses';
export declare namespace ContentTypeResponses {
    class ContentTypeListResponse extends BaseResponses.BaseContentManagementListResponse<ContentTypeContracts.IContentTypeListResponseContract, ContentTypeModels.ContentType> {
        constructor(debug: BaseResponses.IContentManagementResponseDebug, rawData: ContentTypeContracts.IContentTypeListResponseContract, data: {
            items: ContentTypeModels.ContentType[];
            pagination: SharedModels.Pagination;
        });
    }
    class ContentTypeListAllResponse extends BaseResponses.ContentManagementListAllResponse<ContentTypeListResponse, ContentTypeModels.ContentType> {
        constructor(data: {
            items: ContentTypeModels.ContentType[];
            responses: ContentTypeListResponse[];
        });
    }
    class ModifyContentTypeResponse extends BaseResponses.BaseContentManagementResponse<ContentTypeContracts.IViewContentTypeResponseContract, ContentTypeModels.ContentType> {
        constructor(debug: BaseResponses.IContentManagementResponseDebug, rawData: ContentTypeContracts.IViewContentTypeResponseContract, data: ContentTypeModels.ContentType);
    }
    class ViewContentTypeResponse extends BaseResponses.BaseContentManagementResponse<ContentTypeContracts.IViewContentTypeResponseContract, ContentTypeModels.ContentType> {
        constructor(debug: BaseResponses.IContentManagementResponseDebug, rawData: ContentTypeContracts.IViewContentTypeResponseContract, data: ContentTypeModels.ContentType);
    }
    class AddContentTypeResponse extends BaseResponses.BaseContentManagementResponse<ContentTypeContracts.IAddContentTypeResponseContract, ContentTypeModels.ContentType> {
        constructor(debug: BaseResponses.IContentManagementResponseDebug, rawData: ContentTypeContracts.IAddContentTypeResponseContract, data: ContentTypeModels.ContentType);
    }
}
