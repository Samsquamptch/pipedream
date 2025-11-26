"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisableLegacyWebhookQuery = void 0;
const base_query_1 = require("../base-query");
class DisableLegacyWebhookQuery extends base_query_1.BaseQuery {
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
        return this.apiEndpoints.disableLegacyWebhook(this.identifier);
    }
}
exports.DisableLegacyWebhookQuery = DisableLegacyWebhookQuery;
//# sourceMappingURL=disable-legacy-webhook-query.class.js.map