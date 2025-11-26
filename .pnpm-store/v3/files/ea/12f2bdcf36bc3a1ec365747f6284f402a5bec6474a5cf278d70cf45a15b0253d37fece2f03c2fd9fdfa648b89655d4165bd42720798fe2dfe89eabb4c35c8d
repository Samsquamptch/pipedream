"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckEnvironmentValidationQuery = void 0;
const base_query_1 = require("../base-query");
class CheckEnvironmentValidationQuery extends base_query_1.BaseQuery {
    constructor(config, queryService, identifier) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.identifier = identifier;
    }
    toPromise() {
        return this.queryService.checkEnvironmentValidationAsync(this.getUrl(), this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.checkEnvironmentValidation(this.identifier);
    }
}
exports.CheckEnvironmentValidationQuery = CheckEnvironmentValidationQuery;
//# sourceMappingURL=check-environment-validation-query.class.js.map