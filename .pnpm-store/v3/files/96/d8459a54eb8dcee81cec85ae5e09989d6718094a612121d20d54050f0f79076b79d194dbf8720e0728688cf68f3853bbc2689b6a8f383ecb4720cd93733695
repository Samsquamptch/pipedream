import { BaseQuery } from '../base-query';
export class GetLegacyWebhookQuery extends BaseQuery {
    constructor(config, queryService, identifier) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.identifier = identifier;
    }
    toPromise() {
        return this.queryService.getLegacyWebhookAsync(this.getUrl(), this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.getLegacyWebhook(this.identifier);
    }
}
//# sourceMappingURL=get-legacy-webhook-query.class.js.map