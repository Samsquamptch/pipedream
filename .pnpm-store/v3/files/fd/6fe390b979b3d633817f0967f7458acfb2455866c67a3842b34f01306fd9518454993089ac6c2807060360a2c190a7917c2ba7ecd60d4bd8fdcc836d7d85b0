import { Identifiers } from '../../models';
import { IManagementClientConfig } from '../../config';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';
import { EnvironmentResponses } from '../../responses';
export declare class CheckEnvironmentValidationQuery extends BaseQuery<EnvironmentResponses.StartEnvironmentValidationResponse> {
    protected config: IManagementClientConfig;
    protected queryService: ManagementQueryService;
    identifier: Identifiers.TaskIdentifier;
    constructor(config: IManagementClientConfig, queryService: ManagementQueryService, identifier: Identifiers.TaskIdentifier);
    toPromise(): Promise<EnvironmentResponses.StartEnvironmentValidationResponse>;
    protected getAction(): string;
}
