"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListCollectionsQuery = void 0;
const base_query_1 = require("../base-query");
class ListCollectionsQuery extends base_query_1.BaseQuery {
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
exports.ListCollectionsQuery = ListCollectionsQuery;
//# sourceMappingURL=list-collections-query.class.js.map