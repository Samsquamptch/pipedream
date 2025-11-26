"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteWebhookQuery = void 0;
const base_query_1 = require("../base-query");
class DeleteWebhookQuery extends base_query_1.BaseQuery {
    constructor(config, queryService, identifier) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.identifier = identifier;
    }
    toPromise() {
        return this.queryService.deleteWebhookAsync(this.getUrl(), this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.deleteWebhook(this.identifier);
    }
}
exports.DeleteWebhookQuery = DeleteWebhookQuery;
//# sourceMappingURL=delete-webhook-query.class.js.map