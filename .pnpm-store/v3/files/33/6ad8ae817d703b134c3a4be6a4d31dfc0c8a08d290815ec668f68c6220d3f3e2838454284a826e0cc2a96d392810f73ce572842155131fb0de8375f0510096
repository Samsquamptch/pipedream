import { IManagementClientConfig } from '../../config';
import { RoleResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';
export declare class ListRolesQuery extends BaseQuery<RoleResponses.RoleListResponse> {
    protected config: IManagementClientConfig;
    protected queryService: ManagementQueryService;
    constructor(config: IManagementClientConfig, queryService: ManagementQueryService);
    toPromise(): Promise<RoleResponses.RoleListResponse>;
    protected getAction(): string;
}
