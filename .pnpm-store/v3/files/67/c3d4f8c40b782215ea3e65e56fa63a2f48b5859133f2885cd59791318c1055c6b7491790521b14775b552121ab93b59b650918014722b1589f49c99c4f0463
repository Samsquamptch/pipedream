"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivateUserInAllProjectsQuery = void 0;
const base_query_1 = require("../base-query");
class ActivateUserInAllProjectsQuery extends base_query_1.BaseQuery {
    constructor(config, queryService, identifier) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.identifier = identifier;
    }
    toPromise() {
        return this.queryService.activateUserInAllProjectsAsync(this.getUrl(), this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.activateUserInAllProjects(this.identifier);
    }
}
exports.ActivateUserInAllProjectsQuery = ActivateUserInAllProjectsQuery;
//# sourceMappingURL=activate-user-in-all-projects-query.class.js.map