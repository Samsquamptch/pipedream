"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostQuery = void 0;
const base_query_1 = require("../base-query");
class PostQuery extends base_query_1.BaseQuery {
    constructor(config, queryService, action, data) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.action = action;
        this.data = data;
    }
    toPromise() {
        return this.queryService.genericPostResponseAsync(this.getUrl(), this.data, this.queryConfig);
    }
    getAction() {
        return this.action;
    }
}
exports.PostQuery = PostQuery;
//# sourceMappingURL=post-query.class.js.map