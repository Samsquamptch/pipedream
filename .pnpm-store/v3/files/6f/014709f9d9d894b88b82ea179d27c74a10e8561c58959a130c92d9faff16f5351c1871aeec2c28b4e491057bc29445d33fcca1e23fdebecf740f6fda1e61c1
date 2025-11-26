import { BaseQuery } from '../base-query';
export class DeleteQuery extends BaseQuery {
    constructor(config, queryService, action) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.action = action;
    }
    toPromise() {
        return this.queryService.genericDeleteResponseAsync(this.getUrl(), this.queryConfig);
    }
    getAction() {
        return this.action;
    }
}
//# sourceMappingURL=delete-query.class.js.map