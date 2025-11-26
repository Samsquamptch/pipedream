import { IManagementClientConfig } from '../../config';
import { Identifiers } from '../../models';
import { WebhookResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';
export declare class GetLegacyWebhookQuery extends BaseQuery<WebhookResponses.GetLegacyWebhookResponse> {
    protected config: IManagementClientConfig;
    protected queryService: ManagementQueryService;
    identifier: Identifiers.WebhookIdentifier;
    constructor(config: IManagementClientConfig, queryService: ManagementQueryService, identifier: Identifiers.WebhookIdentifier);
    toPromise(): Promise<WebhookResponses.GetLegacyWebhookResponse>;
    protected getAction(): string;
}
