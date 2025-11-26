"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteTaxonomyQuery = void 0;
const base_query_1 = require("../base-query");
class DeleteTaxonomyQuery extends base_query_1.BaseQuery {
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
exports.DeleteTaxonomyQuery = DeleteTaxonomyQuery;
//# sourceMappingURL=delete-taxonomy-query.class.js.map