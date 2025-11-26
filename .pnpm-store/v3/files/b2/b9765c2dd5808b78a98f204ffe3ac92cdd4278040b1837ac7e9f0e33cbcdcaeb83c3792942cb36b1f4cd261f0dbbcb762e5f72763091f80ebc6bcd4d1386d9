import { IResponse } from '@kontent-ai/core-sdk';
import { WebhookContracts } from '../contracts/webhook-contracts';
import { WebhookModels } from '../models/webhook/webhook.models';
import { WebhookResponses } from '../responses';
import { BaseMapper } from './base-mapper';
export declare class WebhookMapper extends BaseMapper {
    mapGetWebhookResponse(response: IResponse<WebhookContracts.IGetWebhookContract>): WebhookResponses.GetWebhookResponse;
    mapGetLegacyWebhookResponse(response: IResponse<WebhookContracts.IGetLegacyWebhookContract>): WebhookResponses.GetLegacyWebhookResponse;
    mapAddWebhookResponse(response: IResponse<WebhookContracts.IGetWebhookContract>): WebhookResponses.AddWebhookResponse;
    mapAddLegacyWebhookResponse(response: IResponse<WebhookContracts.IGetLegacyWebhookContract>): WebhookResponses.AddLegacyWebhookResponse;
    mapWebhooksListResponse(response: IResponse<WebhookContracts.IWebhookListContract>): WebhookResponses.WebhookListResponse;
    mapLegacyWebhooksListResponse(response: IResponse<WebhookContracts.ILegacyWebhookListContract>): WebhookResponses.LegacyWebhookListResponse;
    mapLegacyWebhook(rawWebhook: WebhookContracts.ILegacyWebhookContract): WebhookModels.LegacyWebhook;
    mapWebhook(rawWebhook: WebhookContracts.IWebhookContract): WebhookModels.Webhook;
}
export declare const webhookMapper: WebhookMapper;
