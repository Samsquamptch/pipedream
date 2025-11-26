import { IManagementClientConfig } from '../../config';
import { EnvironmentResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';
export declare class StartEnvironmentValidationQuery extends BaseQuery<EnvironmentResponses.StartEnvironmentValidationResponse> {
    protected config: IManagementClientConfig;
    protected queryService: ManagementQueryService;
    constructor(config: IManagementClientConfig, queryService: ManagementQueryService);
    toPromise(): Promise<EnvironmentResponses.StartEnvironmentValidationResponse>;
    protected getAction(): string;
}
