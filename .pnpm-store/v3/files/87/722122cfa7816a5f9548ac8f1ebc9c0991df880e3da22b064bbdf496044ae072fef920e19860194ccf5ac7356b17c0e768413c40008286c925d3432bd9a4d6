import { BaseQuery } from '../base-query';
export class PutQuery extends BaseQuery {
    constructor(config, queryService, action, data) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.action = action;
        this.data = data;
    }
    toPromise() {
        return this.queryService.genericPutResponseAsync(this.getUrl(), this.data, this.queryConfig);
    }
    getAction() {
        return this.action;
    }
}
//# sourceMappingURL=put-query.class.js.map