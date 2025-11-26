"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateContentItemQuery = void 0;
const base_query_1 = require("../base-query");
class UpdateContentItemQuery extends base_query_1.BaseQuery {
    constructor(config, queryService, data, identifier) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.data = data;
        this.identifier = identifier;
    }
    toPromise() {
        return this.queryService.updateContentItemAsync(this.getUrl(), this.data, this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.updateContentItem(this.identifier);
    }
}
exports.UpdateContentItemQuery = UpdateContentItemQuery;
//# sourceMappingURL=update-content-item-query.class.js.map