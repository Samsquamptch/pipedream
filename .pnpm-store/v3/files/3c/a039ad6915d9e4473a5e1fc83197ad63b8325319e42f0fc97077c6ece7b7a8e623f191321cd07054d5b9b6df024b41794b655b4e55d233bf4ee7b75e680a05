import { IResponse } from '@kontent-ai/core-sdk';
import { CollectionContracts } from '../contracts';
import { CollectionModels } from '../models';
import { CollectionResponses } from '../responses';
import { BaseMapper } from './base-mapper';
export declare class CollectionsMapper extends BaseMapper {
    mapListCollectionsResponse(response: IResponse<CollectionContracts.ICollectionListResponseContract>): CollectionResponses.CollectionsListResponse;
    mapSetCollectionsResponse(response: IResponse<CollectionContracts.ISetCollectionsResponseContract>): CollectionResponses.SetCollectionsResponse;
    mapCollection(rawCollection: CollectionContracts.ICollectionContract): CollectionModels.Collection;
}
export declare const collectionsMappers: CollectionsMapper;
