"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertContentItemQuery = void 0;
const base_query_1 = require("../base-query");
class UpsertContentItemQuery extends base_query_1.BaseQuery {
    constructor(config, queryService, data, identifier) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.data = data;
        this.identifier = identifier;
    }
    toPromise() {
        return this.queryService.upsertContentItemAsync(this.getUrl(), this.data, this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.upsertContentItem(this.identifier);
    }
}
exports.UpsertContentItemQuery = UpsertContentItemQuery;
//# sourceMappingURL=upsert-content-item-query.class.js.map