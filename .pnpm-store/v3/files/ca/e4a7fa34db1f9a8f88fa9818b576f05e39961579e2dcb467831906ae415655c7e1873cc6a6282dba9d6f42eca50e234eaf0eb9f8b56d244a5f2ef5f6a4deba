import { Identifiers, ProjectUserModels } from '../../models';
import { IManagementClientConfig } from '../../config';
import { ProjectUsersResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';
export declare class ChangeUserRolesQuery extends BaseQuery<ProjectUsersResponses.ChangeUserRolesResponse> {
    protected config: IManagementClientConfig;
    protected queryService: ManagementQueryService;
    private identifier;
    private data;
    constructor(config: IManagementClientConfig, queryService: ManagementQueryService, identifier: Identifiers.UserIdentifier, data: ProjectUserModels.IChangeUserRoleData);
    toPromise(): Promise<ProjectUsersResponses.ChangeUserRolesResponse>;
    protected getAction(): string;
}
