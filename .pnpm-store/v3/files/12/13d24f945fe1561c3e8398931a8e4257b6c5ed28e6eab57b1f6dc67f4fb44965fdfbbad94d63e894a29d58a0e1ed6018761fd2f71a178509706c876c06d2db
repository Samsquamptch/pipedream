import { BaseQuery } from '../base-query';
export class DeleteLegacyWebhookQuery extends BaseQuery {
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
        return this.apiEndpoints.deleteLegacyWebhook(this.identifier);
    }
}
//# sourceMappingURL=delete-legacy-webhook-query.class.js.map