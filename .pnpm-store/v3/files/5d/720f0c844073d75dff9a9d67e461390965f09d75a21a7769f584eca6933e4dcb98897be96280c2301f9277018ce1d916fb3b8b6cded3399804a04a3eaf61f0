import { BaseQuery } from '../base-query';
export class ModifySpaceQuery extends BaseQuery {
    constructor(config, queryService, identifier, data) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.identifier = identifier;
        this.data = data;
    }
    toPromise() {
        return this.queryService.modifySpaceAsync(this.getUrl(), this.queryConfig, this.data);
    }
    getAction() {
        return this.apiEndpoints.modifySpace(this.identifier);
    }
}
//# sourceMappingURL=modify-space-query.class.js.map