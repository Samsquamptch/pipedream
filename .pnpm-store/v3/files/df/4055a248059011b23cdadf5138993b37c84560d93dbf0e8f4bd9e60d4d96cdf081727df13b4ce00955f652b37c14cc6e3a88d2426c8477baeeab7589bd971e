import { IResponse } from '@kontent-ai/core-sdk';
import { ContentItemContracts } from '../contracts';
import { ContentItemModels } from '../models';
import { ContentItemResponses } from '../responses';
import { BaseMapper } from './base-mapper';
export declare class ContentItemsMapper extends BaseMapper {
    mapListingItemsResponse(response: IResponse<ContentItemContracts.IContentItemsListingResponseContract>): ContentItemResponses.ContentItemsResponse;
    mapViewContentItemResponse(response: IResponse<ContentItemContracts.IContentItemModelContract>): ContentItemResponses.ViewContentItemResponse;
    mapAddContentItemResponse(response: IResponse<ContentItemContracts.IAddContentItemResponseContract>): ContentItemResponses.AddContentItemResponse;
    mapUpdateContentItemResponse(response: IResponse<ContentItemContracts.IUpdateContentItemResponseContract>): ContentItemResponses.UpdateContentItemResponse;
    mapUpsertContentItemResponse(response: IResponse<ContentItemContracts.IUpsertContentItemResponseContract>): ContentItemResponses.UpsertContentItemResponse;
    mapContentItem(rawItem: ContentItemContracts.IContentItemModelContract): ContentItemModels.ContentItem;
}
export declare const contentItemsMapper: ContentItemsMapper;
