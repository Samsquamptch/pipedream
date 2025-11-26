import { BaseQuery } from '../base-query';
export class GetQuery extends BaseQuery {
    constructor(config, queryService, action) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.action = action;
    }
    toPromise() {
        return this.queryService.genericGetResponseAsync(this.getUrl(), this.queryConfig);
    }
    getAction() {
        return this.action;
    }
}
//# sourceMappingURL=get-query.class.js.map