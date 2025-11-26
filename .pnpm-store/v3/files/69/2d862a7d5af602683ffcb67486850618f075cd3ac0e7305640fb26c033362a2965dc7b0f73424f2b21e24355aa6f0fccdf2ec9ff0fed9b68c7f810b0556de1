"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PutQuery = void 0;
const base_query_1 = require("../base-query");
class PutQuery extends base_query_1.BaseQuery {
    constructor(config, queryService, action, data) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.action = action;
        this.data = data;
    }
    toPromise() {
        return this.queryService.genericPutResponseAsync(this.getUrl(), this.data, this.queryConfig);
    }
    getAction() {
        return this.action;
    }
}
exports.PutQuery = PutQuery;
//# sourceMappingURL=put-query.class.js.map