import { IResponse } from '@kontent-ai/core-sdk';
import { ProjectUserContracts } from '../contracts';
import { ProjectUserModels } from '../models';
import { ProjectUsersResponses } from '../responses';
import { BaseMapper } from './base-mapper';
export declare class ProjectUserMapper extends BaseMapper {
    mapInviteUserResponse(response: IResponse<ProjectUserContracts.IInviteUserResponseContract>): ProjectUsersResponses.InviteUserResponse;
    mapChangeUserRolesResponse(response: IResponse<ProjectUserContracts.IChangeUserRolesResponseContract>): ProjectUsersResponses.ChangeUserRolesResponse;
    mapCollectionGroup(rawItem: ProjectUserContracts.IProjectUserCollectionGroupContract): ProjectUserModels.CollectionGroup;
    mapProjectUser(rawItem: ProjectUserContracts.IUserContract): ProjectUserModels.ProjectUser;
}
export declare const projectUserMapper: ProjectUserMapper;
