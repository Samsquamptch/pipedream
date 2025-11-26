"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectUserMapper = exports.ProjectUserMapper = void 0;
const models_1 = require("../models");
const responses_1 = require("../responses");
const base_mapper_1 = require("./base-mapper");
class ProjectUserMapper extends base_mapper_1.BaseMapper {
    mapInviteUserResponse(response) {
        return new responses_1.ProjectUsersResponses.InviteUserResponse(super.mapResponseDebug(response), response.data, this.mapProjectUser(response.data));
    }
    mapChangeUserRolesResponse(response) {
        return new responses_1.ProjectUsersResponses.ChangeUserRolesResponse(super.mapResponseDebug(response), response.data, this.mapProjectUser(response.data));
    }
    mapCollectionGroup(rawItem) {
        return new models_1.ProjectUserModels.CollectionGroup({
            collections: rawItem.collections,
            roles: rawItem.roles,
            _raw: rawItem
        });
    }
    mapProjectUser(rawItem) {
        return new models_1.ProjectUserModels.ProjectUser({
            userId: rawItem.user_id,
            collectionGroups: rawItem.collection_groups.map((m) => this.mapCollectionGroup(m)),
            _raw: rawItem
        });
    }
}
exports.ProjectUserMapper = ProjectUserMapper;
exports.projectUserMapper = new ProjectUserMapper();
//# sourceMappingURL=project-user-mapper.js.map