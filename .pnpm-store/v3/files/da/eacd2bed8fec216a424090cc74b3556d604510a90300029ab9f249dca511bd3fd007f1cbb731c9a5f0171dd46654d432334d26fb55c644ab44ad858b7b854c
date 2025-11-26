"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeactivateUserInAllProjectsQuery = void 0;
const base_query_1 = require("../base-query");
class DeactivateUserInAllProjectsQuery extends base_query_1.BaseQuery {
    constructor(config, queryService, identifier) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.identifier = identifier;
    }
    toPromise() {
        return this.queryService.deactivateUserInAllProjectsAsync(this.getUrl(), this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.deactivateUserInAllProjects(this.identifier);
    }
}
exports.DeactivateUserInAllProjectsQuery = DeactivateUserInAllProjectsQuery;
//# sourceMappingURL=deactivate-user-in-all-projects-query.class.js.map