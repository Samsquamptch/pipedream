import { BaseQuery } from '../base-query';
export class ChangeUserRolesQuery extends BaseQuery {
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
//# sourceMappingURL=change-user-roles-query.class.js.map