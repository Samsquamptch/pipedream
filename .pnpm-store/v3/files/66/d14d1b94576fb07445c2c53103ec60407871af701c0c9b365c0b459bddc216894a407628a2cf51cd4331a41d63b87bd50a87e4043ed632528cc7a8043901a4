"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteContentItemQuery = void 0;
const base_query_1 = require("../base-query");
class DeleteContentItemQuery extends base_query_1.BaseQuery {
    constructor(config, queryService, identifier) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.identifier = identifier;
    }
    toPromise() {
        return this.queryService.deleteContentItemAsync(this.getUrl(), this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.deleteContentItem(this.identifier);
    }
}
exports.DeleteContentItemQuery = DeleteContentItemQuery;
//# sourceMappingURL=delete-content-item-query.class.js.map