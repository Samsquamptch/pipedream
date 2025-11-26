"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddLanguageQuery = void 0;
const base_query_1 = require("../base-query");
class AddLanguageQuery extends base_query_1.BaseQuery {
    constructor(config, queryService, data) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.data = data;
    }
    toPromise() {
        return this.queryService.addLanguageAsync(this.getUrl(), this.queryConfig, this.data);
    }
    getAction() {
        return this.apiEndpoints.addLanguage();
    }
}
exports.AddLanguageQuery = AddLanguageQuery;
//# sourceMappingURL=add-language-query.class.js.map