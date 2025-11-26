"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListRolesQuery = void 0;
const base_query_1 = require("../base-query");
class ListRolesQuery extends base_query_1.BaseQuery {
    constructor(config, queryService) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
    }
    toPromise() {
        return this.queryService.listRolesAsync(this.getUrl(), this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.listRoles();
    }
}
exports.ListRolesQuery = ListRolesQuery;
//# sourceMappingURL=list-roles-query.class.js.map