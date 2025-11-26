import { IManagementClientConfig } from '../../config';
import { WebhookModels } from '../../models';
import { WebhookResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';
export declare class AddWebhookQuery extends BaseQuery<WebhookResponses.AddWebhookResponse> {
    protected config: IManagementClientConfig;
    protected queryService: ManagementQueryService;
    data: WebhookModels.IAddWebhookData;
    constructor(config: IManagementClientConfig, queryService: ManagementQueryService, data: WebhookModels.IAddWebhookData);
    toPromise(): Promise<WebhookResponses.GetWebhookResponse>;
    protected getAction(): string;
}
