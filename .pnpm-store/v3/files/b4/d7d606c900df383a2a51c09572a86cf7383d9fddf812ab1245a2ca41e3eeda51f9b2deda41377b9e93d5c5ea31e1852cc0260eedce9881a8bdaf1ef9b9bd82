import { IResponse } from '@kontent-ai/core-sdk';
import { RoleContracts } from '../contracts';
import { RoleModels } from '../models';
import { RoleResponses } from '../responses';
import { BaseMapper } from './base-mapper';
export declare class RoleMapper extends BaseMapper {
    mapRoleListResponse(response: IResponse<RoleContracts.IRoleListResponseContract>): RoleResponses.RoleListResponse;
    mapViewRoleResponse(response: IResponse<RoleContracts.IRoleContract>): RoleResponses.ViewRoleResponse;
    mapRole(rawItem: RoleContracts.IRoleContract): RoleModels.Role;
}
export declare const roleMapper: RoleMapper;
