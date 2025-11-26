"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListSpacesQuery = void 0;
const base_query_1 = require("../base-query");
class ListSpacesQuery extends base_query_1.BaseQuery {
    constructor(config, queryService) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
    }
    toPromise() {
        return this.queryService.listSpacesAsync(this.getUrl(), this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.listSpaces();
    }
}
exports.ListSpacesQuery = ListSpacesQuery;
//# sourceMappingURL=list-spaces-query.class.js.map