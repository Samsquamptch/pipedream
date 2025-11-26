"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModifyContentTypeQuery = void 0;
const base_query_1 = require("../base-query");
class ModifyContentTypeQuery extends base_query_1.BaseQuery {
    constructor(config, queryService, identifier, data) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.identifier = identifier;
        this.data = data;
    }
    toPromise() {
        return this.queryService.modifyContentTypeAsync(this.getUrl(), this.queryConfig, this.data);
    }
    getAction() {
        return this.apiEndpoints.modifyContentType(this.identifier);
    }
}
exports.ModifyContentTypeQuery = ModifyContentTypeQuery;
//# sourceMappingURL=modify-content-type-query.class.js.map