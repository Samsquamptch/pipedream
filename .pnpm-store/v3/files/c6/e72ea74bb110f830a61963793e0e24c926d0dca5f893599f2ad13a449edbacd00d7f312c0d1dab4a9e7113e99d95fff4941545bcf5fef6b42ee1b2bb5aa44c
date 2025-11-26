"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewSubscriptionUserQuery = void 0;
const base_query_1 = require("../base-query");
class ViewSubscriptionUserQuery extends base_query_1.BaseQuery {
    constructor(config, queryService, identifier) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.identifier = identifier;
    }
    toPromise() {
        return this.queryService.viewSubscriptionUserAsync(this.getUrl(), this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.viewSubscriptionUser(this.identifier);
    }
}
exports.ViewSubscriptionUserQuery = ViewSubscriptionUserQuery;
//# sourceMappingURL=view-subscription-user-query.class.js.map