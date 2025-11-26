import { IManagementClientConfig } from '../../config';
import { Identifiers, WorkflowModels } from '../../models';
import { WorkflowResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';
export declare class UpdateWorkflowQuery extends BaseQuery<WorkflowResponses.UpdateWorkflowResponse> {
    protected config: IManagementClientConfig;
    protected queryService: ManagementQueryService;
    data: WorkflowModels.IUpdateWorkflowData;
    identifier: Identifiers.WorkflowIdentifier;
    constructor(config: IManagementClientConfig, queryService: ManagementQueryService, data: WorkflowModels.IUpdateWorkflowData, identifier: Identifiers.WorkflowIdentifier);
    toPromise(): Promise<WorkflowResponses.UpdateWorkflowResponse>;
    protected getAction(): string;
}
