import { SharedContracts } from './shared-contracts';
export declare namespace SubscriptionContracts {
    interface ISubscriptionProjectEnvironmentContract {
        id: string;
        name: string;
    }
    interface ISubscriptionProjectContract {
        id: string;
        is_active: boolean;
        name: string;
        environments: ISubscriptionProjectEnvironmentContract[];
    }
    interface IListSubscriptionProjectsResponseContract {
        pagination: SharedContracts.IPaginationModelContract;
        projects: ISubscriptionProjectContract[];
    }
    interface IListSubscriptionUsersResponseContract {
        pagination: SharedContracts.IPaginationModelContract;
        users: ISubscriptionUserContract[];
    }
    interface ISubscriptionCollectionGroupContract {
        collections: SharedContracts.IReferenceObjectContract[];
        roles: ISubscriptionUserRoleContract[];
    }
    interface ISubscriptionUserRoleLanguageContract {
        id: string;
        external_id?: string;
        codename: string;
        name: string;
        is_active: boolean;
    }
    interface ISubscriptionUserRoleContract {
        id: string;
        name: string;
        codename: string;
        languages: ISubscriptionUserRoleLanguageContract[];
    }
    interface ISubscriptionUserEnvironmentContract {
        id: string;
        name: string;
        is_user_active: boolean;
        last_activity_at?: string;
        collection_groups: ISubscriptionCollectionGroupContract[];
    }
    interface ISubscriptionUserProjectContract {
        id: string;
        name: string;
        environments: ISubscriptionUserEnvironmentContract[];
    }
    interface ISubscriptionUserContract {
        id: string;
        email: string;
        has_pending_invitation: boolean;
        projects: ISubscriptionUserProjectContract[];
        first_name?: string;
        last_name?: string;
    }
}
