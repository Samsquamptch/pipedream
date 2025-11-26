import { BaseQuery } from '../base-query';
export class DeleteContentItemQuery extends BaseQuery {
    constructor(config, queryService, identifier) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.identifier = identifier;
    }
    toPromise() {
        return this.queryService.deleteContentItemAsync(this.getUrl(), this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.deleteContentItem(this.identifier);
    }
}
//# sourceMappingURL=delete-content-item-query.class.js.map