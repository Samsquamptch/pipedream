import { IManagementClientConfig } from '../../config';
import { Identifiers } from '../../models';
import { SubscriptionResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';
export declare class ViewSubscriptionUserQuery extends BaseQuery<SubscriptionResponses.ViewSubscriptionUserResponse> {
    protected config: IManagementClientConfig;
    protected queryService: ManagementQueryService;
    identifier: Identifiers.UserIdentifier;
    constructor(config: IManagementClientConfig, queryService: ManagementQueryService, identifier: Identifiers.UserIdentifier);
    toPromise(): Promise<SubscriptionResponses.ViewSubscriptionUserResponse>;
    protected getAction(): string;
}
