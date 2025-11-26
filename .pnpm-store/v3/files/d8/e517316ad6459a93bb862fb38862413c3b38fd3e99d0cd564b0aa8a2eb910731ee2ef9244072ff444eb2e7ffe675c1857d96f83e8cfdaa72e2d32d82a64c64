"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddTaxonomyQuery = void 0;
const base_query_1 = require("../base-query");
class AddTaxonomyQuery extends base_query_1.BaseQuery {
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
exports.AddTaxonomyQuery = AddTaxonomyQuery;
//# sourceMappingURL=add-taxonomy-query.class.js.map