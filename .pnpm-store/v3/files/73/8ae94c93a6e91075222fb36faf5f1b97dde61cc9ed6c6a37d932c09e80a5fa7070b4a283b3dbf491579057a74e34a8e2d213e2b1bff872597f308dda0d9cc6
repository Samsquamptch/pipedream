"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddWebhookQuery = void 0;
const base_query_1 = require("../base-query");
class AddWebhookQuery extends base_query_1.BaseQuery {
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
exports.AddWebhookQuery = AddWebhookQuery;
//# sourceMappingURL=add-webhook-query.class.js.map