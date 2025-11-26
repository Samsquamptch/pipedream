import { BaseQuery } from '../base-query';
export class GetTaxonomyQuery extends BaseQuery {
    constructor(config, queryService, identifier) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.identifier = identifier;
    }
    toPromise() {
        return this.queryService.getTaxonomyAsync(this.getUrl(), this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.getTaxonomy(this.identifier);
    }
}
//# sourceMappingURL=get-taxonomy-query.class.js.map