"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewContentItemQuery = void 0;
const base_query_1 = require("../base-query");
class ViewContentItemQuery extends base_query_1.BaseQuery {
    constructor(config, queryService, identifier) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.identifier = identifier;
    }
    toPromise() {
        return this.queryService.viewContentItemAsync(this.getUrl(), this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.viewContentItem(this.identifier);
    }
}
exports.ViewContentItemQuery = ViewContentItemQuery;
//# sourceMappingURL=view-content-item-query.class.js.map