import { RoleContracts } from '../../contracts';
import { RoleModels } from '../../models';
import { BaseResponses } from '../base-responses';
export declare namespace RoleResponses {
    class RoleListResponse extends BaseResponses.BaseContentManagementResponse<RoleContracts.IRoleListResponseContract, {
        roles: RoleModels.Role[];
    }> {
        constructor(debug: BaseResponses.IContentManagementResponseDebug, rawData: RoleContracts.IRoleListResponseContract, data: {
            roles: RoleModels.Role[];
        });
    }
    class ViewRoleResponse extends BaseResponses.BaseContentManagementResponse<RoleContracts.IRoleContract, RoleModels.Role> {
        constructor(debug: BaseResponses.IContentManagementResponseDebug, rawData: RoleContracts.IRoleContract, data: RoleModels.Role);
    }
}
