import { BaseQuery } from '../base-query';
export class AddContentItemQuery extends BaseQuery {
    constructor(config, queryService, data) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.data = data;
    }
    toPromise() {
        return this.queryService.addContentItemAsync(this.getUrl(), this.data, this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.addContentItem();
    }
}
export class AddContentItemQueryInit {
    constructor(config, queryService) {
        this.config = config;
        this.queryService = queryService;
    }
    withData(item) {
        return new AddContentItemQuery(this.config, this.queryService, item);
    }
}
//# sourceMappingURL=add-content-item-query.class.js.map