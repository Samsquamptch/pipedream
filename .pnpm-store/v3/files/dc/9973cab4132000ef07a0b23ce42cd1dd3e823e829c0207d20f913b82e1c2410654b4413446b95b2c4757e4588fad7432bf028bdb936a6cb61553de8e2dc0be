"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewSubscriptionProjectQuery = void 0;
const base_query_1 = require("../base-query");
class ViewSubscriptionProjectQuery extends base_query_1.BaseQuery {
    constructor(config, queryService, identifier) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.identifier = identifier;
    }
    toPromise() {
        return this.queryService.viewSubscriptionProjectAsync(this.getUrl(), this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.viewSubscriptionProject(this.identifier);
    }
}
exports.ViewSubscriptionProjectQuery = ViewSubscriptionProjectQuery;
//# sourceMappingURL=view-subscription-project-query.class.js.map