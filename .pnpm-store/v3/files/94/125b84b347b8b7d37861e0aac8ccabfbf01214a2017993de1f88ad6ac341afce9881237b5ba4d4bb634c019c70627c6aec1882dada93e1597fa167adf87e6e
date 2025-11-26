import { Identifiers } from '../../models';
import { IManagementClientConfig } from '../../config';
import { EnvironmentResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseListingQuery } from '../base-listing-query';
export declare class ListEnvironmentValidationIssuesQuery extends BaseListingQuery<EnvironmentResponses.EnvironmentValidationIssuesListResponse, EnvironmentResponses.EnvironmentValidationIssuesListAllResponse> {
    protected config: IManagementClientConfig;
    protected queryService: ManagementQueryService;
    taskIdentifier: Identifiers.TaskIdentifier;
    constructor(config: IManagementClientConfig, queryService: ManagementQueryService, taskIdentifier: Identifiers.TaskIdentifier);
    toPromise(): Promise<EnvironmentResponses.EnvironmentValidationIssuesListResponse>;
    protected getAction(): string;
    protected allResponseFactory(items: any[], responses: EnvironmentResponses.EnvironmentValidationIssuesListResponse[]): EnvironmentResponses.EnvironmentValidationIssuesListAllResponse;
}
