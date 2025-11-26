"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddLegacyWebhookQuery = void 0;
const base_query_1 = require("../base-query");
class AddLegacyWebhookQuery extends base_query_1.BaseQuery {
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
exports.AddLegacyWebhookQuery = AddLegacyWebhookQuery;
//# sourceMappingURL=add-legacy-webhook-query.class.js.map