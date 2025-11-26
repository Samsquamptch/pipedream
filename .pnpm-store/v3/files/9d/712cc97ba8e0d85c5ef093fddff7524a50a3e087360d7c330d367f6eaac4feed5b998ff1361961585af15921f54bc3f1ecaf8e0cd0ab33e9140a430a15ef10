import { BaseQuery } from '../base-query';
export class InviteProjectUserQuery extends BaseQuery {
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
//# sourceMappingURL=invite-user-query.class.js.map