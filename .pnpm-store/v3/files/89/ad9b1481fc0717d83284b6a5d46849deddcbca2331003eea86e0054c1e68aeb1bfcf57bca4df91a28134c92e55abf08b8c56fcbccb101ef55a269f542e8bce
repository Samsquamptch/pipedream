import { BaseQuery } from '../base-query';
export class ListRolesQuery extends BaseQuery {
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
//# sourceMappingURL=list-roles-query.class.js.map