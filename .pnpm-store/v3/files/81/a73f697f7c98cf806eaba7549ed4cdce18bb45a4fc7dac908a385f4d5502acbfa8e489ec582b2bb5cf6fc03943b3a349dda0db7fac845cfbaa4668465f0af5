import { IManagementClientConfig } from '../../config';
import { WorkflowResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';
export declare class ListWorkflowsQuery extends BaseQuery<WorkflowResponses.ListWorkflowsResponse> {
    protected config: IManagementClientConfig;
    protected queryService: ManagementQueryService;
    constructor(config: IManagementClientConfig, queryService: ManagementQueryService);
    toPromise(): Promise<WorkflowResponses.ListWorkflowsResponse>;
    protected getAction(): string;
}
