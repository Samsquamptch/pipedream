import { BaseQuery } from '../base-query';
export class DeactivateUserInAllProjectsQuery extends BaseQuery {
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
//# sourceMappingURL=deactivate-user-in-all-projects-query.class.js.map