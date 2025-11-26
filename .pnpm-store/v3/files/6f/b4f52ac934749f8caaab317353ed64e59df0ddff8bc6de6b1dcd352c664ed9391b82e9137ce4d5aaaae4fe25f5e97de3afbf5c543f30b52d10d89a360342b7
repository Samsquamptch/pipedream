import { BaseQuery } from '../base-query';
import { IManagementClientConfig } from '../../config';
import { ManagementQueryService } from '../../services';
import { EnvironmentModels } from '../../models/environments/environment.models';
import { EnvironmentResponses } from '../../responses/environments/environment-responses';
export declare class CloneEnvironmentQuery extends BaseQuery<EnvironmentResponses.CloneEnvironmentResponse> {
    protected config: IManagementClientConfig;
    protected queryService: ManagementQueryService;
    data: EnvironmentModels.ICloneEnvironmentData;
    constructor(config: IManagementClientConfig, queryService: ManagementQueryService, data: EnvironmentModels.ICloneEnvironmentData);
    toPromise(): Promise<EnvironmentResponses.CloneEnvironmentResponse>;
    protected getAction(): string;
}
