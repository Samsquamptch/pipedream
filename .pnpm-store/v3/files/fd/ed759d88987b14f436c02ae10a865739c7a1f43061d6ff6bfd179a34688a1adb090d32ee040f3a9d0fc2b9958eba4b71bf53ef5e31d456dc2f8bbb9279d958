import { BaseQuery } from '../base-query';
import { EnvironmentResponses } from '../../responses/environments/environment-responses';
import { IManagementClientConfig } from '../../config';
import { ManagementQueryService } from '../../services';
export declare class GetEnvironmentCloningStateQuery extends BaseQuery<EnvironmentResponses.GetCloningStateResponse> {
    protected config: IManagementClientConfig;
    protected queryService: ManagementQueryService;
    constructor(config: IManagementClientConfig, queryService: ManagementQueryService);
    toPromise(): Promise<EnvironmentResponses.GetCloningStateResponse>;
    protected getAction(): string;
}
