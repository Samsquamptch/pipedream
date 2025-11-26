import { BaseQuery } from '../base-query';
import { IManagementClientConfig } from '../../config';
import { ManagementQueryService } from '../../services';
import { EnvironmentModels } from '../../models/environments/environment.models';
import { BaseResponses } from '../../responses';
export declare class MarkEnvironmentAsProductionQuery extends BaseQuery<BaseResponses.EmptyContentManagementResponse> {
    protected config: IManagementClientConfig;
    protected queryService: ManagementQueryService;
    data: EnvironmentModels.IMarkEnvironmentAsProductionData;
    constructor(config: IManagementClientConfig, queryService: ManagementQueryService, data: EnvironmentModels.IMarkEnvironmentAsProductionData);
    toPromise(): Promise<BaseResponses.EmptyContentManagementResponse>;
    protected getAction(): string;
}
