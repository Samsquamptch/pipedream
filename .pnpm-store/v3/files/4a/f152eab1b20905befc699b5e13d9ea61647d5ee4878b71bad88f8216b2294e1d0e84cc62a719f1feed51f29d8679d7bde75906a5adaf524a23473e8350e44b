import { ProjectUserModels } from '../models';
import { ProjectUsersResponses } from '../responses';
import { BaseMapper } from './base-mapper';
export class ProjectUserMapper extends BaseMapper {
    mapInviteUserResponse(response) {
        return new ProjectUsersResponses.InviteUserResponse(super.mapResponseDebug(response), response.data, this.mapProjectUser(response.data));
    }
    mapChangeUserRolesResponse(response) {
        return new ProjectUsersResponses.ChangeUserRolesResponse(super.mapResponseDebug(response), response.data, this.mapProjectUser(response.data));
    }
    mapCollectionGroup(rawItem) {
        return new ProjectUserModels.CollectionGroup({
            collections: rawItem.collections,
            roles: rawItem.roles,
            _raw: rawItem
        });
    }
    mapProjectUser(rawItem) {
        return new ProjectUserModels.ProjectUser({
            userId: rawItem.user_id,
            collectionGroups: rawItem.collection_groups.map((m) => this.mapCollectionGroup(m)),
            _raw: rawItem
        });
    }
}
export const projectUserMapper = new ProjectUserMapper();
//# sourceMappingURL=project-user-mapper.js.map