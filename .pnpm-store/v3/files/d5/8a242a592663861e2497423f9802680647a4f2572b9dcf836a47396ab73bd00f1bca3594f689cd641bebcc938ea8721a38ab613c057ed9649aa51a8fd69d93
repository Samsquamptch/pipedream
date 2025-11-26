import { BaseQuery } from '../base-query';
export class ModifyContentTypeQuery extends BaseQuery {
    constructor(config, queryService, identifier, data) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.identifier = identifier;
        this.data = data;
    }
    toPromise() {
        return this.queryService.modifyContentTypeAsync(this.getUrl(), this.queryConfig, this.data);
    }
    getAction() {
        return this.apiEndpoints.modifyContentType(this.identifier);
    }
}
//# sourceMappingURL=modify-content-type-query.class.js.map