import { IManagementClientConfig } from '../../config';
import { WebhookModels } from '../../models';
import { WebhookResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';
export declare class AddLegacyWebhookQuery extends BaseQuery<WebhookResponses.AddLegacyWebhookResponse> {
    protected config: IManagementClientConfig;
    protected queryService: ManagementQueryService;
    data: WebhookModels.IAddLegacyWebhookData;
    constructor(config: IManagementClientConfig, queryService: ManagementQueryService, data: WebhookModels.IAddLegacyWebhookData);
    toPromise(): Promise<WebhookResponses.GetLegacyWebhookResponse>;
    protected getAction(): string;
}
