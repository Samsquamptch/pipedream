import { SharedModels } from '../shared/shared-models';
import { SharedContracts, SubscriptionContracts } from '../../contracts';
export declare namespace SubscriptionModels {
    interface ISubscriptionEnvironment {
        name: string;
        id: string;
    }
    class SubscriptionProject implements SharedModels.IBaseModel<SubscriptionContracts.ISubscriptionProjectContract> {
        id: string;
        isActive: boolean;
        name: string;
        environments: ISubscriptionEnvironment[];
        _raw: SubscriptionContracts.ISubscriptionProjectContract;
        constructor(data: {
            id: string;
            isActive: boolean;
            name: string;
            environments: ISubscriptionEnvironment[];
            _raw: SubscriptionContracts.ISubscriptionProjectContract;
        });
    }
    interface ISubscriptionCollectionGroup {
        collections: SharedContracts.IReferenceObjectContract[];
        roles: ISubscriptionUserRole[];
    }
    interface ISubscriptionUserRoleLanguage {
        id: string;
        externalId?: string;
        codename: string;
        name: string;
        isActive: boolean;
    }
    interface ISubscriptionUserRole {
        id: string;
        name: string;
        codename: string;
        languages: ISubscriptionUserRoleLanguage[];
    }
    interface ISubscriptionUserEnvironment {
        id: string;
        name: string;
        isUserActive: boolean;
        lastActivityAt?: Date;
        collectionGroups: ISubscriptionCollectionGroup[];
    }
    interface ISubscriptionUserProject {
        id: string;
        name: string;
        environments: ISubscriptionUserEnvironment[];
    }
    class SubscriptionUser {
        id: string;
        email: string;
        hasPendingInvitation: boolean;
        projects: ISubscriptionUserProject[];
        firstName?: string;
        lastName?: string;
        constructor(data: {
            id: string;
            email: string;
            hasPendingInvitation: boolean;
            projects: ISubscriptionUserProject[];
            firstName?: string;
            lastName?: string;
            _raw: SubscriptionContracts.ISubscriptionUserContract;
        });
    }
}
