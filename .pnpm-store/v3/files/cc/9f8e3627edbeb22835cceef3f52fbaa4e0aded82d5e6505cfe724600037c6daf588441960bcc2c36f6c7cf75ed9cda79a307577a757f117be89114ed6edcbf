"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddSpaceQuery = void 0;
const base_query_1 = require("../base-query");
class AddSpaceQuery extends base_query_1.BaseQuery {
    constructor(config, queryService, data) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.data = data;
    }
    toPromise() {
        return this.queryService.addSpaceAsync(this.getUrl(), this.data, this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.addSpace();
    }
}
exports.AddSpaceQuery = AddSpaceQuery;
//# sourceMappingURL=add-space-query.class.js.map