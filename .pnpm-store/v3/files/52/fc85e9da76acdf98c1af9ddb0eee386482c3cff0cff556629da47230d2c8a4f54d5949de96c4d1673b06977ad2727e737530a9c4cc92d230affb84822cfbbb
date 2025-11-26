"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetQuery = void 0;
const base_query_1 = require("../base-query");
class GetQuery extends base_query_1.BaseQuery {
    constructor(config, queryService, action) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.action = action;
    }
    toPromise() {
        return this.queryService.genericGetResponseAsync(this.getUrl(), this.queryConfig);
    }
    getAction() {
        return this.action;
    }
}
exports.GetQuery = GetQuery;
//# sourceMappingURL=get-query.class.js.map