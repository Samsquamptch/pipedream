"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roleMapper = exports.RoleMapper = void 0;
const models_1 = require("../models");
const responses_1 = require("../responses");
const base_mapper_1 = require("./base-mapper");
class RoleMapper extends base_mapper_1.BaseMapper {
    mapRoleListResponse(response) {
        const items = response.data.roles.map((m) => this.mapRole(m));
        return new responses_1.RoleResponses.RoleListResponse(super.mapResponseDebug(response), response.data, {
            roles: items
        });
    }
    mapViewRoleResponse(response) {
        return new responses_1.RoleResponses.ViewRoleResponse(super.mapResponseDebug(response), response.data, this.mapRole(response.data));
    }
    mapRole(rawItem) {
        return new models_1.RoleModels.Role({
            id: rawItem.id,
            name: rawItem.name,
            codename: rawItem.codename,
            _raw: rawItem
        });
    }
}
exports.RoleMapper = RoleMapper;
exports.roleMapper = new RoleMapper();
//# sourceMappingURL=role-mapper.js.map