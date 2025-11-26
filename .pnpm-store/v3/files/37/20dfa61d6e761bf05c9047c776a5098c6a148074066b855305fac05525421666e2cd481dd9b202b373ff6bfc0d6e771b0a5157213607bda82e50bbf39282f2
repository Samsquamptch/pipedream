import { BaseQuery } from '../base-query';
export class AddTaxonomyQuery extends BaseQuery {
    constructor(config, queryService, data) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.data = data;
    }
    toPromise() {
        return this.queryService.addTaxonomyAsync(this.getUrl(), this.data, this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.addTaxonomy();
    }
}
//# sourceMappingURL=add-taxonomy-query.class.js.map