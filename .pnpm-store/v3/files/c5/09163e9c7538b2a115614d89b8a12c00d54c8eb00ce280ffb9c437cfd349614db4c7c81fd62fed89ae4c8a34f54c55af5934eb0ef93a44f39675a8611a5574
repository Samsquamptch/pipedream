import { IResponse } from '@kontent-ai/core-sdk';
import { ContentTypeContracts } from '../contracts';
import { ContentTypeModels } from '../models';
import { ContentTypeResponses } from '../responses';
import { BaseMapper } from './base-mapper';
export declare class ContentTypeMapper extends BaseMapper {
    mapListingResponse(response: IResponse<ContentTypeContracts.IContentTypeListResponseContract>): ContentTypeResponses.ContentTypeListResponse;
    mapViewContentTypeResponse(response: IResponse<ContentTypeContracts.IViewContentTypeResponseContract>): ContentTypeResponses.ViewContentTypeResponse;
    mapModifyContentTypeResponse(response: IResponse<ContentTypeContracts.IModifyContentTypeResponseContract>): ContentTypeResponses.ModifyContentTypeResponse;
    mapAddContentTypeResponse(response: IResponse<ContentTypeContracts.IAddContentTypeResponseContract>): ContentTypeResponses.AddContentTypeResponse;
    mapContentType(rawContentType: ContentTypeContracts.IContentTypeContract): ContentTypeModels.ContentType;
    mapContentTypeGroup(rawContentTypeGroup: ContentTypeContracts.IContentTypeGroup): ContentTypeModels.ContentTypeGroup;
}
export declare const contentTypeMapper: ContentTypeMapper;
