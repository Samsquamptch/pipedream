import { IManagementClientConfig } from '../../config';
import { Identifiers } from '../../models';
import { WebhookResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';
export declare class GetWebhookQuery extends BaseQuery<WebhookResponses.GetWebhookResponse> {
    protected config: IManagementClientConfig;
    protected queryService: ManagementQueryService;
    identifier: Identifiers.WebhookIdentifier;
    constructor(config: IManagementClientConfig, queryService: ManagementQueryService, identifier: Identifiers.WebhookIdentifier);
    toPromise(): Promise<WebhookResponses.GetWebhookResponse>;
    protected getAction(): string;
}
