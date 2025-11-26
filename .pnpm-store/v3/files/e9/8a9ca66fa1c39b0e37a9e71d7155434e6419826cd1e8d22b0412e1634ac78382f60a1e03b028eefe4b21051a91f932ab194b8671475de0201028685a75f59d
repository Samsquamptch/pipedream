"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModifySpaceQuery = void 0;
const base_query_1 = require("../base-query");
class ModifySpaceQuery extends base_query_1.BaseQuery {
    constructor(config, queryService, identifier, data) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.identifier = identifier;
        this.data = data;
    }
    toPromise() {
        return this.queryService.modifySpaceAsync(this.getUrl(), this.queryConfig, this.data);
    }
    getAction() {
        return this.apiEndpoints.modifySpace(this.identifier);
    }
}
exports.ModifySpaceQuery = ModifySpaceQuery;
//# sourceMappingURL=modify-space-query.class.js.map