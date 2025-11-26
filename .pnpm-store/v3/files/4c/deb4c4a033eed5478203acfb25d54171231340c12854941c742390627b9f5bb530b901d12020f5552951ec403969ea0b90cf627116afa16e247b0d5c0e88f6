import { BaseQuery } from '../base-query';
export class PostQuery extends BaseQuery {
    constructor(config, queryService, action, data) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.action = action;
        this.data = data;
    }
    toPromise() {
        return this.queryService.genericPostResponseAsync(this.getUrl(), this.data, this.queryConfig);
    }
    getAction() {
        return this.action;
    }
}
//# sourceMappingURL=post-query.class.js.map