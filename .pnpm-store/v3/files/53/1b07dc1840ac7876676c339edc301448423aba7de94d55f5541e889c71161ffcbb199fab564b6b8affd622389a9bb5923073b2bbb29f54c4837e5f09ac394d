import { BaseQuery } from '../base-query';
export class UpsertContentItemQuery extends BaseQuery {
    constructor(config, queryService, data, identifier) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.data = data;
        this.identifier = identifier;
    }
    toPromise() {
        return this.queryService.upsertContentItemAsync(this.getUrl(), this.data, this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.upsertContentItem(this.identifier);
    }
}
//# sourceMappingURL=upsert-content-item-query.class.js.map