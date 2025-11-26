import { Identifiers } from '../../models';
import { IManagementClientConfig } from '../../config';
import { RoleResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';
export declare class ViewRoleQuery extends BaseQuery<RoleResponses.ViewRoleResponse> {
    protected config: IManagementClientConfig;
    protected queryService: ManagementQueryService;
    private identifier;
    constructor(config: IManagementClientConfig, queryService: ManagementQueryService, identifier: Identifiers.RoleIdentifier);
    toPromise(): Promise<RoleResponses.ViewRoleResponse>;
    protected getAction(): string;
}
