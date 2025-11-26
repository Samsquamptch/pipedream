"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetTaxonomyQuery = void 0;
const base_query_1 = require("../base-query");
class GetTaxonomyQuery extends base_query_1.BaseQuery {
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
exports.GetTaxonomyQuery = GetTaxonomyQuery;
//# sourceMappingURL=get-taxonomy-query.class.js.map