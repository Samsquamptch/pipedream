"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewRoleQuery = void 0;
const base_query_1 = require("../base-query");
class ViewRoleQuery extends base_query_1.BaseQuery {
    constructor(config, queryService, identifier) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.identifier = identifier;
    }
    toPromise() {
        return this.queryService.viewRoleAsync(this.getUrl(), this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.viewRole(this.identifier);
    }
}
exports.ViewRoleQuery = ViewRoleQuery;
//# sourceMappingURL=view-role-query.class.js.map