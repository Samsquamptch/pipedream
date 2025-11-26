import { BaseQuery } from '../base-query';
export class UpdateContentItemQuery extends BaseQuery {
    constructor(config, queryService, data, identifier) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.data = data;
        this.identifier = identifier;
    }
    toPromise() {
        return this.queryService.updateContentItemAsync(this.getUrl(), this.data, this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.updateContentItem(this.identifier);
    }
}
//# sourceMappingURL=update-content-item-query.class.js.map