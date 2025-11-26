import { BaseQuery } from '../base-query';
export class GetWebhookQuery extends BaseQuery {
    constructor(config, queryService, identifier) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.identifier = identifier;
    }
    toPromise() {
        return this.queryService.getWebhookAsync(this.getUrl(), this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.getWebhook(this.identifier);
    }
}
//# sourceMappingURL=get-webhook-query.class.js.map