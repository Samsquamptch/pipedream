"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModifyLanguageQuery = void 0;
const base_query_1 = require("../base-query");
class ModifyLanguageQuery extends base_query_1.BaseQuery {
    constructor(config, queryService, identifier, data) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.identifier = identifier;
        this.data = data;
    }
    toPromise() {
        return this.queryService.modifyLanguageAsync(this.getUrl(), this.queryConfig, this.data);
    }
    getAction() {
        return this.apiEndpoints.modifyLanguage(this.identifier);
    }
}
exports.ModifyLanguageQuery = ModifyLanguageQuery;
//# sourceMappingURL=modify-language-query.class.js.map