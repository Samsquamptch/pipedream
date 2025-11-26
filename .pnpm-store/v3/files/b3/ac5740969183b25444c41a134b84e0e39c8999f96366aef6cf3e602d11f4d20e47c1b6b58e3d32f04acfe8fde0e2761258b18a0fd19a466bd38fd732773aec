import { BaseQuery } from '../base-query';
export class EnableLegacyWebhookQuery extends BaseQuery {
    constructor(config, queryService, identifier) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.identifier = identifier;
    }
    toPromise() {
        return this.queryService.enableWebhookAsync(this.getUrl(), this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.enableLegacyWebhook(this.identifier);
    }
}
//# sourceMappingURL=enable-legacy-webhook-query.class.js.map