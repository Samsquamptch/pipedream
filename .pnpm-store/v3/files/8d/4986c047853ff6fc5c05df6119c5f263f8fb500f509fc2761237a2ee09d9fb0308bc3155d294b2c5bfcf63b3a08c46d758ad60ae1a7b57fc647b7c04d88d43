import { IManagementClientConfig } from '../config';
import { Identifiers } from '../models';
import { ManagementQueryService } from '../services';
export declare class WorkflowIdentifierQuery<TResult> {
    protected config: IManagementClientConfig;
    protected queryService: ManagementQueryService;
    protected buildResult: (config: IManagementClientConfig, queryService: ManagementQueryService, identifier: Identifiers.WorkflowIdentifier) => TResult;
    constructor(config: IManagementClientConfig, queryService: ManagementQueryService, buildResult: (config: IManagementClientConfig, queryService: ManagementQueryService, identifier: Identifiers.WorkflowIdentifier) => TResult);
    /**
     * Id identifier
     * @param id If of the workflow
     */
    byWorkflowId(id: string): TResult;
    /**
     * Codename identifier
     * @param codename codename of the workflow
     */
    byWorkflowCodename(codename: string): TResult;
}
