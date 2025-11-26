"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeUserRolesQuery = void 0;
const base_query_1 = require("../base-query");
class ChangeUserRolesQuery extends base_query_1.BaseQuery {
    constructor(config, queryService, identifier, data) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.identifier = identifier;
        this.data = data;
    }
    toPromise() {
        return this.queryService.changeUserRolesAsync(this.getUrl(), this.queryConfig, this.data);
    }
    getAction() {
        return this.apiEndpoints.changeProjectUserRoles(this.identifier);
    }
}
exports.ChangeUserRolesQuery = ChangeUserRolesQuery;
//# sourceMappingURL=change-user-roles-query.class.js.map