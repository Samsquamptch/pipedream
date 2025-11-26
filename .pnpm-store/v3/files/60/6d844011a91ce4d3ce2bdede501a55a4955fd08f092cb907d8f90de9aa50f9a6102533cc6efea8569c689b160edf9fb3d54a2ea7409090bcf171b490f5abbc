"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetLegacyWebhookQuery = void 0;
const base_query_1 = require("../base-query");
class GetLegacyWebhookQuery extends base_query_1.BaseQuery {
    constructor(config, queryService, identifier) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.identifier = identifier;
    }
    toPromise() {
        return this.queryService.getLegacyWebhookAsync(this.getUrl(), this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.getLegacyWebhook(this.identifier);
    }
}
exports.GetLegacyWebhookQuery = GetLegacyWebhookQuery;
//# sourceMappingURL=get-legacy-webhook-query.class.js.map