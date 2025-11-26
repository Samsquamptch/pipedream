"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InviteProjectUserQuery = void 0;
const base_query_1 = require("../base-query");
class InviteProjectUserQuery extends base_query_1.BaseQuery {
    constructor(config, queryService, data) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.data = data;
    }
    toPromise() {
        return this.queryService.inviteProjectUserAsync(this.getUrl(), this.queryConfig, this.data);
    }
    getAction() {
        return this.apiEndpoints.inviteProjectUser();
    }
}
exports.InviteProjectUserQuery = InviteProjectUserQuery;
//# sourceMappingURL=invite-user-query.class.js.map