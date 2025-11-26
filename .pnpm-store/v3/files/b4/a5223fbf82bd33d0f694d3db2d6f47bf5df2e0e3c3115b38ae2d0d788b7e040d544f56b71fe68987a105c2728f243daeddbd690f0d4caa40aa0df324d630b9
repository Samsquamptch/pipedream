"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnableLegacyWebhookQuery = void 0;
const base_query_1 = require("../base-query");
class EnableLegacyWebhookQuery extends base_query_1.BaseQuery {
    constructor(config, queryService, identifier) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.identifier = identifier;
    }
    toPromise() {
        return this.queryService.enableWebhookAsync(this.getUrl(), this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.enableLegacyWebhook(this.identifier);
    }
}
exports.EnableLegacyWebhookQuery = EnableLegacyWebhookQuery;
//# sourceMappingURL=enable-legacy-webhook-query.class.js.map