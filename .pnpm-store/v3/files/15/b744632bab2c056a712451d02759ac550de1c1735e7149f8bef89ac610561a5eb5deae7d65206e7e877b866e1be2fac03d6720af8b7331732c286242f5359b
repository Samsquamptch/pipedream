"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisableWebhookQuery = void 0;
const base_query_1 = require("../base-query");
class DisableWebhookQuery extends base_query_1.BaseQuery {
    constructor(config, queryService, identifier) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.identifier = identifier;
    }
    toPromise() {
        return this.queryService.disableWebhookAsync(this.getUrl(), this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.disableWebhook(this.identifier);
    }
}
exports.DisableWebhookQuery = DisableWebhookQuery;
//# sourceMappingURL=disable-webhook-query.class.js.map