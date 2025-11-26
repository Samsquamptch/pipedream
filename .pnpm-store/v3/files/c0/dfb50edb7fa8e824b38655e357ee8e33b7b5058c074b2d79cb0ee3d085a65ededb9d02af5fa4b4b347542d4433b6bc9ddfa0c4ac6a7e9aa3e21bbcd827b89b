import { BaseQuery } from '../base-query';
import { BaseResponses } from '../../responses';
import { IManagementClientConfig } from '../../config';
import { ManagementQueryService } from '../../services';
export declare class DeleteEnvironmentQuery extends BaseQuery<BaseResponses.EmptyContentManagementResponse> {
    protected config: IManagementClientConfig;
    protected queryService: ManagementQueryService;
    constructor(config: IManagementClientConfig, queryService: ManagementQueryService);
    toPromise(): Promise<BaseResponses.EmptyContentManagementResponse>;
    protected getAction(): string;
}
