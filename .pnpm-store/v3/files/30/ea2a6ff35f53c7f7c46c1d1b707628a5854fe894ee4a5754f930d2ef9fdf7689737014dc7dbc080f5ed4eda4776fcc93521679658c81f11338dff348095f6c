import { SharedContracts } from './shared-contracts';
export declare namespace ProjectUserContracts {
    interface IProjectUserRoleContract {
        id: string;
        languages: SharedContracts.IReferenceObjectContract[];
    }
    interface IUserContract {
        user_id: string;
        collection_groups: IProjectUserCollectionGroupContract[];
    }
    interface IProjectUserCollectionGroupContract {
        collections: SharedContracts.IReferenceObjectContract[];
        roles: IProjectUserRoleContract[];
    }
    interface IInviteUserResponseContract extends IUserContract {
    }
    interface IChangeUserRolesResponseContract extends IUserContract {
    }
}
