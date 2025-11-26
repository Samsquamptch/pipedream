import { ContentItemContracts } from '../../contracts';
import { ContentItemModels, SharedModels } from '../../models';
import { BaseResponses } from '../base-responses';
export declare namespace ContentItemResponses {
    class ContentItemsResponse extends BaseResponses.BaseContentManagementListResponse<ContentItemContracts.IContentItemsListingResponseContract, ContentItemModels.ContentItem> {
        constructor(debug: BaseResponses.IContentManagementResponseDebug, rawData: ContentItemContracts.IContentItemsListingResponseContract, data: {
            items: ContentItemModels.ContentItem[];
            pagination: SharedModels.Pagination;
        });
    }
    class ContentItemsListAllResponse extends BaseResponses.ContentManagementListAllResponse<ContentItemsResponse, ContentItemModels.ContentItem> {
        constructor(data: {
            items: ContentItemModels.ContentItem[];
            responses: ContentItemsResponse[];
        });
    }
    class ViewContentItemResponse extends BaseResponses.BaseContentManagementResponse<ContentItemContracts.IViewContentItemResponseContract, ContentItemModels.ContentItem> {
        constructor(debug: BaseResponses.IContentManagementResponseDebug, rawData: ContentItemContracts.IViewContentItemResponseContract, data: ContentItemModels.ContentItem);
    }
    class AddContentItemResponse extends BaseResponses.BaseContentManagementResponse<ContentItemContracts.IAddContentItemResponseContract, ContentItemModels.ContentItem> {
        constructor(debug: BaseResponses.IContentManagementResponseDebug, rawData: ContentItemContracts.IAddContentItemResponseContract, data: ContentItemModels.ContentItem);
    }
    class UpdateContentItemResponse extends BaseResponses.BaseContentManagementResponse<ContentItemContracts.IUpdateContentItemResponseContract, ContentItemModels.ContentItem> {
        constructor(debug: BaseResponses.IContentManagementResponseDebug, rawData: ContentItemContracts.IAddContentItemResponseContract, data: ContentItemModels.ContentItem);
    }
    class UpsertContentItemResponse extends BaseResponses.BaseContentManagementResponse<ContentItemContracts.IUpsertContentItemResponseContract, ContentItemModels.ContentItem> {
        constructor(debug: BaseResponses.IContentManagementResponseDebug, rawData: ContentItemContracts.IUpsertContentItemResponseContract, data: ContentItemModels.ContentItem);
    }
}
