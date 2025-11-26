import { BaseQuery } from '../base-query';
export class DeleteTaxonomyQuery extends BaseQuery {
    constructor(config, queryService, identifier) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.identifier = identifier;
    }
    toPromise() {
        return this.queryService.deleteTaxonomyAsync(this.getUrl(), this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.deleteTaxonomy(this.identifier);
    }
}
//# sourceMappingURL=delete-taxonomy-query.class.js.map