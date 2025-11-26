import { BaseQuery } from '../base-query';
export class SetCollectionsQuery extends BaseQuery {
    constructor(config, queryService, data) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.data = data;
    }
    toPromise() {
        return this.queryService.setCollectionsAsync(this.getUrl(), this.queryConfig, this.data);
    }
    getAction() {
        return this.apiEndpoints.setCollections();
    }
}
//# sourceMappingURL=set-collections-query.class.js.map