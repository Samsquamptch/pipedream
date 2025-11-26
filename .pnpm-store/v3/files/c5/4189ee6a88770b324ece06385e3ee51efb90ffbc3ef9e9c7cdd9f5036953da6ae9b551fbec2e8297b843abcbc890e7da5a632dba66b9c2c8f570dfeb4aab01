import { BaseQuery } from '../base-query';
import { EnvironmentResponses } from '../../responses/environments/environment-responses';
import { IManagementClientConfig } from '../../config';
import { ManagementQueryService } from '../../services';
import { EnvironmentModels } from '../../models/environments/environment.models';
export declare class ModifyEnvironmentQuery extends BaseQuery<EnvironmentResponses.ModifyEnvironmentResponse> {
    protected config: IManagementClientConfig;
    protected queryService: ManagementQueryService;
    data: EnvironmentModels.IModifyEnvironmentData[];
    constructor(config: IManagementClientConfig, queryService: ManagementQueryService, data: EnvironmentModels.IModifyEnvironmentData[]);
    toPromise(): Promise<EnvironmentResponses.ModifyEnvironmentResponse>;
    protected getAction(): string;
}
