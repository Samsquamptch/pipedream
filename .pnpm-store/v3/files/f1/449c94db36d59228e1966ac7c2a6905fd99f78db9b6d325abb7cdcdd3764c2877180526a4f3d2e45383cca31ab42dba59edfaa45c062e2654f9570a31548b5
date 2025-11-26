"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteQuery = void 0;
const base_query_1 = require("../base-query");
class DeleteQuery extends base_query_1.BaseQuery {
    constructor(config, queryService, action) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.action = action;
    }
    toPromise() {
        return this.queryService.genericDeleteResponseAsync(this.getUrl(), this.queryConfig);
    }
    getAction() {
        return this.action;
    }
}
exports.DeleteQuery = DeleteQuery;
//# sourceMappingURL=delete-query.class.js.map