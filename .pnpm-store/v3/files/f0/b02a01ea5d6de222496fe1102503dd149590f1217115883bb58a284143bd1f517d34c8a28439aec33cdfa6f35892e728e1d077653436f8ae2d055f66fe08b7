import { BaseQuery } from '../base-query';
export class ListWebhooksQuery extends BaseQuery {
    constructor(config, queryService) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
    }
    toPromise() {
        return this.queryService.listWebhooksAsync(this.getUrl(), this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.listWebhooks();
    }
}
//# sourceMappingURL=list-webhooks-query.class.js.map