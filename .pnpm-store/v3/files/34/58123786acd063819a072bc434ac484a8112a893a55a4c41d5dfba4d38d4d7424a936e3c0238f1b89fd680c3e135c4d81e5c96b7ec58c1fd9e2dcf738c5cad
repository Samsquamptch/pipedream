import { IDeliveryClientConfig } from '../config';
import { Contracts } from '../contracts';
import { Responses, IContentItem } from '../models';
export interface IMappingService {
    listContentTypesResponse(data: Contracts.IListContentTypeContract): Responses.IListContentTypesResponse;
    itemsFeedResponse<TContentItem extends IContentItem = IContentItem>(data: Contracts.IItemsFeedContract): Responses.IListItemsFeedResponse<TContentItem>;
    viewContentTypeResponse(data: Contracts.IViewContentTypeContract): Responses.IViewContentTypeResponse;
    viewContentItemResponse<TContentItem extends IContentItem = IContentItem>(data: Contracts.IViewContentItemContract): Responses.IViewContentItemResponse<TContentItem>;
    listContentItemsResponse<TContentItem extends IContentItem = IContentItem>(data: Contracts.IListContentItemsContract): Responses.IListContentItemsResponse<TContentItem>;
    viewTaxonomyResponse(data: Contracts.IViewTaxonomyGroupContract): Responses.IViewTaxonomyResponse;
    listTaxonomiesResponse(data: Contracts.IListTaxonomyGroupsContract): Responses.IListTaxonomiesResponse;
    viewContentTypeElementResponse(data: Contracts.IViewContentTypeElementContract): Responses.IViewContentTypeElementResponse;
    listLanguagesResponse(data: Contracts.IListLanguagesContract): Responses.IListLanguagesResponse;
    initializeContentSync(data: Contracts.IInitializeSyncContract): Responses.IInitializeSyncResponse;
    syncChanges(data: Contracts.ISyncChangesContract): Responses.ISyncChangesResponse;
}
export declare class MappingService implements IMappingService {
    readonly config: IDeliveryClientConfig;
    private readonly typeMapper;
    private readonly languageMapper;
    private readonly itemMapper;
    private readonly taxonomyMapper;
    private readonly genericElementMapper;
    private readonly syncMapper;
    constructor(config: IDeliveryClientConfig);
    /**
     * Gets response for list of languages
     * @param data Response data
     */
    listLanguagesResponse(data: Contracts.IListLanguagesContract): Responses.IListLanguagesResponse;
    /**
     * Gets response for getting a multiple type
     * @param data Response data
     */
    listContentTypesResponse(data: Contracts.IListContentTypeContract): Responses.IListContentTypesResponse;
    /**
     * Gets response for single type
     * @param data Response data
     * @param options Options
     */
    viewContentTypeResponse(data: Contracts.IViewContentTypeContract): Responses.IViewContentTypeResponse;
    itemsFeedResponse<TContentItem extends IContentItem = IContentItem>(data: Contracts.IItemsFeedContract): Responses.IListItemsFeedResponse<TContentItem>;
    /**
     * Gets response for getting single item
     * @param data Response data
     * @param queryConfig Query configuration
     */
    viewContentItemResponse<TContentItem extends IContentItem = IContentItem>(data: Contracts.IViewContentItemContract): Responses.IViewContentItemResponse<TContentItem>;
    /**
     * Gets response for getting multiple items
     * @param data Response data
     * @param queryConfig Query configuration
     */
    listContentItemsResponse<TContentItem extends IContentItem = IContentItem>(data: Contracts.IListContentItemsContract): Responses.IListContentItemsResponse<TContentItem>;
    /**
     * Gets response for getting single taxonomy item
     * @param data Response data
     */
    viewTaxonomyResponse(data: Contracts.IViewTaxonomyGroupContract): Responses.IViewTaxonomyResponse;
    /**
     * Gets response for getting multiples taxonomies
     * @param data Response data
     */
    listTaxonomiesResponse(data: Contracts.IListTaxonomyGroupsContract): Responses.IListTaxonomiesResponse;
    /**
     * Gets response for getting single content type element
     * @param data Response data
     */
    viewContentTypeElementResponse(data: Contracts.IViewContentTypeElementContract): Responses.IViewContentTypeElementResponse;
    initializeContentSync(data: Contracts.IInitializeSyncContract): Responses.IInitializeSyncResponse;
    syncChanges(data: Contracts.ISyncChangesContract): Responses.ISyncChangesResponse;
    private mapPagination;
}
