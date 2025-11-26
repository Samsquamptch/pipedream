import { IManagementClientConfig } from '../../config';
import { Identifiers } from '../../models';
import { SubscriptionResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';
export declare class ViewSubscriptionProjectQuery extends BaseQuery<SubscriptionResponses.ViewSubscriptionProjectResponse> {
    protected config: IManagementClientConfig;
    protected queryService: ManagementQueryService;
    identifier: Identifiers.EnvironmentIdentifier;
    constructor(config: IManagementClientConfig, queryService: ManagementQueryService, identifier: Identifiers.EnvironmentIdentifier);
    toPromise(): Promise<SubscriptionResponses.ViewSubscriptionProjectResponse>;
    protected getAction(): string;
}
