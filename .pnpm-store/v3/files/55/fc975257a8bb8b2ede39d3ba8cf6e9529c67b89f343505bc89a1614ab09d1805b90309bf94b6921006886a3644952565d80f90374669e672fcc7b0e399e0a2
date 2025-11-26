import { BaseQuery } from '../base-query';
export class ListCollectionsQuery extends BaseQuery {
    constructor(config, queryService) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
    }
    toPromise() {
        return this.queryService.listCollectionsAsync(this.getUrl(), this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.listCollections();
    }
}
//# sourceMappingURL=list-collections-query.class.js.map