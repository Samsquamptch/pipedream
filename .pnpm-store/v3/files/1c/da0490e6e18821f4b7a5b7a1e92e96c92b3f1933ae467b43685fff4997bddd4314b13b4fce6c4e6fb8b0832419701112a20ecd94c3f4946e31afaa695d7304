import { BaseQuery } from '../base-query';
export class AddWebhookQuery extends BaseQuery {
    constructor(config, queryService, data) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.data = data;
    }
    toPromise() {
        return this.queryService.addWebhookAsync(this.getUrl(), this.queryConfig, this.data);
    }
    getAction() {
        return this.apiEndpoints.addWebhook();
    }
}
//# sourceMappingURL=add-webhook-query.class.js.map