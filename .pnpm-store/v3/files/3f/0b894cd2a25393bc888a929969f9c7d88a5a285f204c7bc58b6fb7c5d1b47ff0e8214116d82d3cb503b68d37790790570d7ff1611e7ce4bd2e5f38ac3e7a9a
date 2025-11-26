import { IManagementClientConfig } from '../../config';
import { WebhookResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';
export declare class ListWebhooksQuery extends BaseQuery<WebhookResponses.WebhookListResponse> {
    protected config: IManagementClientConfig;
    protected queryService: ManagementQueryService;
    constructor(config: IManagementClientConfig, queryService: ManagementQueryService);
    toPromise(): Promise<WebhookResponses.WebhookListResponse>;
    protected getAction(): string;
}
