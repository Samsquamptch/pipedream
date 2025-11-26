import { ProjectUserModels } from '../../models';
import { IManagementClientConfig } from '../../config';
import { ProjectUsersResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';
export declare class InviteProjectUserQuery extends BaseQuery<ProjectUsersResponses.InviteUserResponse> {
    protected config: IManagementClientConfig;
    protected queryService: ManagementQueryService;
    private data;
    constructor(config: IManagementClientConfig, queryService: ManagementQueryService, data: ProjectUserModels.IInviteUserData);
    toPromise(): Promise<ProjectUsersResponses.InviteUserResponse>;
    protected getAction(): string;
}
