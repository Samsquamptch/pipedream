"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListWebhooksQuery = void 0;
const base_query_1 = require("../base-query");
class ListWebhooksQuery extends base_query_1.BaseQuery {
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
exports.ListWebhooksQuery = ListWebhooksQuery;
//# sourceMappingURL=list-webhooks-query.class.js.map