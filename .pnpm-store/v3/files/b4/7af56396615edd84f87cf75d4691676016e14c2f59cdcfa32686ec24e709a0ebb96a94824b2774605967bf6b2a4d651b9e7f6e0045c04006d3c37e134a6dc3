"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatchQuery = void 0;
const base_query_1 = require("../base-query");
class PatchQuery extends base_query_1.BaseQuery {
    constructor(config, queryService, action, data) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.action = action;
        this.data = data;
    }
    toPromise() {
        return this.queryService.genericPatchResponseAsync(this.getUrl(), this.data, this.queryConfig);
    }
    getAction() {
        return this.action;
    }
}
exports.PatchQuery = PatchQuery;
//# sourceMappingURL=patch-query.class.js.map