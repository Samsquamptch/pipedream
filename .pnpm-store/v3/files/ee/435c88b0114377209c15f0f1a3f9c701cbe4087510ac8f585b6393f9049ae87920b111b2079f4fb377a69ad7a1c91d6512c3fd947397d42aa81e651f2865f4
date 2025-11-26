import { BaseQuery } from '../base-query';
export class AddLegacyWebhookQuery extends BaseQuery {
    constructor(config, queryService, data) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.data = data;
    }
    toPromise() {
        return this.queryService.addLegacyWebhookAsync(this.getUrl(), this.queryConfig, this.data);
    }
    getAction() {
        return this.apiEndpoints.addLegacyWebhook();
    }
}
//# sourceMappingURL=add-legacy-webhook-query.class.js.map