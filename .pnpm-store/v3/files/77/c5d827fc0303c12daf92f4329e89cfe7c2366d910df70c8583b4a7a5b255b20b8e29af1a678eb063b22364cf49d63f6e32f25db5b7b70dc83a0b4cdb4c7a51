import { SubscriptionContracts } from '../../contracts';
import { SharedModels, SubscriptionModels } from '../../models';
import { BaseResponses } from '../base-responses';
export declare namespace SubscriptionResponses {
    class SubscriptionProjectsListResponse extends BaseResponses.BaseContentManagementListResponse<SubscriptionContracts.IListSubscriptionProjectsResponseContract, SubscriptionModels.SubscriptionProject> {
        constructor(debug: BaseResponses.IContentManagementResponseDebug, rawData: SubscriptionContracts.IListSubscriptionProjectsResponseContract, data: {
            items: SubscriptionModels.SubscriptionProject[];
            pagination: SharedModels.Pagination;
        });
    }
    class SubscriptionProjectsListAllResponse extends BaseResponses.ContentManagementListAllResponse<SubscriptionProjectsListResponse, SubscriptionModels.SubscriptionProject> {
        constructor(data: {
            items: SubscriptionModels.SubscriptionProject[];
            responses: SubscriptionProjectsListResponse[];
        });
    }
    class ViewSubscriptionProjectResponse extends BaseResponses.BaseContentManagementResponse<SubscriptionContracts.ISubscriptionProjectContract, SubscriptionModels.SubscriptionProject> {
        constructor(debug: BaseResponses.IContentManagementResponseDebug, rawData: SubscriptionContracts.ISubscriptionProjectContract, data: SubscriptionModels.SubscriptionProject);
    }
    class SubscriptionUsersListResponse extends BaseResponses.BaseContentManagementListResponse<SubscriptionContracts.IListSubscriptionUsersResponseContract, SubscriptionModels.SubscriptionUser> {
        constructor(debug: BaseResponses.IContentManagementResponseDebug, rawData: SubscriptionContracts.IListSubscriptionUsersResponseContract, data: {
            items: SubscriptionModels.SubscriptionUser[];
            pagination: SharedModels.Pagination;
        });
    }
    class SubscriptionUsersListAllResponse extends BaseResponses.ContentManagementListAllResponse<SubscriptionUsersListResponse, SubscriptionModels.SubscriptionUser> {
        constructor(data: {
            items: SubscriptionModels.SubscriptionUser[];
            responses: SubscriptionUsersListResponse[];
        });
    }
    class ViewSubscriptionUserResponse extends BaseResponses.BaseContentManagementResponse<SubscriptionContracts.ISubscriptionUserContract, SubscriptionModels.SubscriptionUser> {
        constructor(debug: BaseResponses.IContentManagementResponseDebug, rawData: SubscriptionContracts.ISubscriptionUserContract, data: SubscriptionModels.SubscriptionUser);
    }
}
