"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnableWebhookQuery = void 0;
const base_query_1 = require("../base-query");
class EnableWebhookQuery extends base_query_1.BaseQuery {
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
        return this.apiEndpoints.enableWebhook(this.identifier);
    }
}
exports.EnableWebhookQuery = EnableWebhookQuery;
//# sourceMappingURL=enable-webhook-query.class.js.map