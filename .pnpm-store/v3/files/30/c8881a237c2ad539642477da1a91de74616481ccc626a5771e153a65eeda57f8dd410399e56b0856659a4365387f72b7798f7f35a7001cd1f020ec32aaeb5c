import { BaseQuery } from '../base-query';
export class DisableLegacyWebhookQuery extends BaseQuery {
    constructor(config, queryService, identifier) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.identifier = identifier;
    }
    toPromise() {
        return this.queryService.disableWebhookAsync(this.getUrl(), this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.disableLegacyWebhook(this.identifier);
    }
}
//# sourceMappingURL=disable-legacy-webhook-query.class.js.map