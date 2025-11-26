import { RoleModels } from '../models';
import { RoleResponses } from '../responses';
import { BaseMapper } from './base-mapper';
export class RoleMapper extends BaseMapper {
    mapRoleListResponse(response) {
        const items = response.data.roles.map((m) => this.mapRole(m));
        return new RoleResponses.RoleListResponse(super.mapResponseDebug(response), response.data, {
            roles: items
        });
    }
    mapViewRoleResponse(response) {
        return new RoleResponses.ViewRoleResponse(super.mapResponseDebug(response), response.data, this.mapRole(response.data));
    }
    mapRole(rawItem) {
        return new RoleModels.Role({
            id: rawItem.id,
            name: rawItem.name,
            codename: rawItem.codename,
            _raw: rawItem
        });
    }
}
export const roleMapper = new RoleMapper();
//# sourceMappingURL=role-mapper.js.map