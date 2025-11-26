import { IResponse } from '@kontent-ai/core-sdk';
import { SpaceContracts } from '../contracts';
import { SpaceModels } from '../models';
import { SpaceResponses } from '../responses';
import { BaseMapper } from './base-mapper';
export declare class SpacesMapper extends BaseMapper {
    mapListingSpacesResponse(response: IResponse<SpaceContracts.ISpacesListingResponseContract>): SpaceResponses.SpacesListResponse;
    mapViewSpaceResponse(response: IResponse<SpaceContracts.ISpaceContract>): SpaceResponses.ViewSpaceResponse;
    mapAddSpaceResponse(response: IResponse<SpaceContracts.IAddSpaceResponseContract>): SpaceResponses.AddSpaceResponse;
    mapModifySpaceResponse(response: IResponse<SpaceContracts.IModifySpaceResponseContract>): SpaceResponses.ModifySpaceResponse;
    mapSpace(rawItem: SpaceContracts.ISpaceContract): SpaceModels.Space;
}
export declare const spacesMapper: SpacesMapper;
