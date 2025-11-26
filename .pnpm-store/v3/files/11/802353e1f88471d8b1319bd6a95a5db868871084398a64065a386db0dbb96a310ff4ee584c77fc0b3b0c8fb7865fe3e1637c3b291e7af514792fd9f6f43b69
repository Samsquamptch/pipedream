import { IManagementClientConfig } from '../../config';
import { EnvironmentResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';
export declare class EnvironmentInformationQuery extends BaseQuery<EnvironmentResponses.EnvironmentInformationResponse> {
    protected config: IManagementClientConfig;
    protected queryService: ManagementQueryService;
    constructor(config: IManagementClientConfig, queryService: ManagementQueryService);
    toPromise(): Promise<EnvironmentResponses.EnvironmentInformationResponse>;
    protected getAction(): string;
}
