import { BaseQuery } from '../base-query';
export class ActivateUserInAllProjectsQuery extends BaseQuery {
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
//# sourceMappingURL=activate-user-in-all-projects-query.class.js.map