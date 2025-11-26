"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewSpaceQuery = void 0;
const base_query_1 = require("../base-query");
class ViewSpaceQuery extends base_query_1.BaseQuery {
    constructor(config, queryService, identifier) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.identifier = identifier;
    }
    toPromise() {
        return this.queryService.viewSpaceAsync(this.getUrl(), this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.viewSpace(this.identifier);
    }
}
exports.ViewSpaceQuery = ViewSpaceQuery;
//# sourceMappingURL=view-space-query.class.js.map