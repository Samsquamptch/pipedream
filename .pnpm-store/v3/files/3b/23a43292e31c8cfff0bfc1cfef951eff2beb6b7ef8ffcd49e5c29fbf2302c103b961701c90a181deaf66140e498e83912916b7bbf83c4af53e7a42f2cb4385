import { BaseQuery } from '../base-query';
export class DeleteSpaceQuery extends BaseQuery {
    constructor(config, queryService, identifier) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.identifier = identifier;
    }
    toPromise() {
        return this.queryService.deleteSpaceAsync(this.getUrl(), this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.deleteSpace(this.identifier);
    }
}
//# sourceMappingURL=delete-space-query.class.js.map