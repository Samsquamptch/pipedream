"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetWebhookQuery = void 0;
const base_query_1 = require("../base-query");
class GetWebhookQuery extends base_query_1.BaseQuery {
    constructor(config, queryService, identifier) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.identifier = identifier;
    }
    toPromise() {
        return this.queryService.getWebhookAsync(this.getUrl(), this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.getWebhook(this.identifier);
    }
}
exports.GetWebhookQuery = GetWebhookQuery;
//# sourceMappingURL=get-webhook-query.class.js.map