import { IManagementClientConfig } from '../config';
import { Identifiers } from '../models';
import { ManagementQueryService } from '../services';
export declare class WorkflowStepIdentifierQuery<TResult> {
    protected config: IManagementClientConfig;
    protected queryService: ManagementQueryService;
    protected buildResult: (config: IManagementClientConfig, queryService: ManagementQueryService, identifier: Identifiers.WorkflowIdentifier) => TResult;
    constructor(config: IManagementClientConfig, queryService: ManagementQueryService, buildResult: (config: IManagementClientConfig, queryService: ManagementQueryService, identifier: Identifiers.WorkflowIdentifier) => TResult);
    /**
     * Id identifier
     * @param id If of the workflow step
     */
    byWorkflowStepId(id: string): TResult;
    /**
     * Codename identifier
     * @param codename codename of the workflow step
     */
    byWorkflowStepCodename(codename: string): TResult;
}
