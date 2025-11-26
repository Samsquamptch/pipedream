import { IManagementClientConfig } from '../../config';
import { WorkflowModels } from '../../models';
import { WorkflowResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';
export declare class AddWorkflowQuery extends BaseQuery<WorkflowResponses.AddWorkflowResponse> {
    protected config: IManagementClientConfig;
    protected queryService: ManagementQueryService;
    data: WorkflowModels.IAddWorkflowData;
    constructor(config: IManagementClientConfig, queryService: ManagementQueryService, data: WorkflowModels.IAddWorkflowData);
    toPromise(): Promise<WorkflowResponses.AddWorkflowResponse>;
    protected getAction(): string;
}
