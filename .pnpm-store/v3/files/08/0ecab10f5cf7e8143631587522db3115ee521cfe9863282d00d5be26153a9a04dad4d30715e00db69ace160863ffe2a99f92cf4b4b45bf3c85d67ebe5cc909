import { BaseQuery } from '../base-query';
export class DeleteWebhookQuery extends BaseQuery {
    constructor(config, queryService, identifier) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.identifier = identifier;
    }
    toPromise() {
        return this.queryService.deleteWebhookAsync(this.getUrl(), this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.deleteWebhook(this.identifier);
    }
}
//# sourceMappingURL=delete-webhook-query.class.js.map