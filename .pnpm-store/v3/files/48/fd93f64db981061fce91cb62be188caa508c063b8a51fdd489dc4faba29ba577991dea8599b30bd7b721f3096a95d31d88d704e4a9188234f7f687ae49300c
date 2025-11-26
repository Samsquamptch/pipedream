import { BaseQuery } from '../base-query';
import { ManagementQueryService } from '../../services';
import { IManagementClientConfig } from '../../config';
import { Identifiers } from '../../models';
import { BaseResponses } from '../../responses';
export declare class DeleteWorkflowQuery extends BaseQuery<BaseResponses.EmptyContentManagementResponse> {
    protected config: IManagementClientConfig;
    protected queryService: ManagementQueryService;
    identifier: Identifiers.WorkflowIdentifier;
    constructor(config: IManagementClientConfig, queryService: ManagementQueryService, identifier: Identifiers.WorkflowIdentifier);
    toPromise(): Promise<BaseResponses.EmptyContentManagementResponse>;
    protected getAction(): string;
}
