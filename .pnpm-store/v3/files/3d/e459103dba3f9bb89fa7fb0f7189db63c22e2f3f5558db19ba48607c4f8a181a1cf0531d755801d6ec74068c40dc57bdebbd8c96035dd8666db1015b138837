import { IManagementClientConfig } from '../../config';
import { WebhookResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';
export declare class ListLegacyWebhooksQuery extends BaseQuery<WebhookResponses.LegacyWebhookListResponse> {
    protected config: IManagementClientConfig;
    protected queryService: ManagementQueryService;
    constructor(config: IManagementClientConfig, queryService: ManagementQueryService);
    toPromise(): Promise<WebhookResponses.LegacyWebhookListResponse>;
    protected getAction(): string;
}
