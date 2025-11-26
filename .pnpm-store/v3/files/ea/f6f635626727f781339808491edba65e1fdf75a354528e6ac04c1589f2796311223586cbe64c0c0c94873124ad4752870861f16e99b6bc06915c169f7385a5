import { BaseQuery } from '../base-query';
export class ListLegacyWebhooksQuery extends BaseQuery {
    constructor(config, queryService) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
    }
    toPromise() {
        return this.queryService.listLegacyWebhooksAsync(this.getUrl(), this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.listLegacyWebhooks();
    }
}
//# sourceMappingURL=list-legacy-webhooks-query.class.js.map