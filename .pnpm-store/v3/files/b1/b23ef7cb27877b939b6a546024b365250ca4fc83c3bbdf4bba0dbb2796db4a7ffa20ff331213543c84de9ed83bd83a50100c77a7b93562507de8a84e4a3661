import { BaseQuery } from '../base-query';
export class AddSpaceQuery extends BaseQuery {
    constructor(config, queryService, data) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.data = data;
    }
    toPromise() {
        return this.queryService.addSpaceAsync(this.getUrl(), this.data, this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.addSpace();
    }
}
//# sourceMappingURL=add-space-query.class.js.map