import { SharedModels } from '../shared/shared-models';
import { ProjectUserContracts, SharedContracts } from '../../contracts';
export declare namespace ProjectUserModels {
    interface IProjectUserCollectionGroup {
        collections: SharedContracts.IReferenceObjectContract[];
        roles: IProjectUserRole[];
    }
    interface IProjectUserRole {
        id: string;
        languages: SharedContracts.IReferenceObjectContract[];
    }
    class ProjectUser implements SharedModels.IBaseModel<ProjectUserContracts.IUserContract> {
        userId: string;
        collectionGroups: CollectionGroup[];
        _raw: ProjectUserContracts.IUserContract;
        constructor(data: {
            userId: string;
            collectionGroups: CollectionGroup[];
            _raw: ProjectUserContracts.IUserContract;
        });
    }
    class CollectionGroup implements SharedModels.IBaseModel<ProjectUserContracts.IProjectUserCollectionGroupContract> {
        collections: SharedContracts.IReferenceObjectContract[];
        roles: ProjectUserModels.IProjectUserRole[];
        _raw: ProjectUserContracts.IProjectUserCollectionGroupContract;
        constructor(data: {
            collections: SharedContracts.IReferenceObjectContract[];
            roles: ProjectUserModels.IProjectUserRole[];
            _raw: ProjectUserContracts.IProjectUserCollectionGroupContract;
        });
    }
    interface ICollectionGroupsData {
        collections: SharedContracts.IReferenceObjectContract[];
        roles: {
            id: string;
            languages: SharedContracts.IReferenceObjectContract[];
        }[];
    }
    interface IInviteUserData {
        email: string;
        collection_groups: ICollectionGroupsData[];
    }
    interface IChangeUserRoleData {
        collection_groups: ICollectionGroupsData[];
    }
}
