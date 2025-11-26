"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListLegacyWebhooksQuery = void 0;
const base_query_1 = require("../base-query");
class ListLegacyWebhooksQuery extends base_query_1.BaseQuery {
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
exports.ListLegacyWebhooksQuery = ListLegacyWebhooksQuery;
//# sourceMappingURL=list-legacy-webhooks-query.class.js.map