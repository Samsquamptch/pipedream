"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StartEnvironmentValidationQuery = void 0;
const base_query_1 = require("../base-query");
class StartEnvironmentValidationQuery extends base_query_1.BaseQuery {
    constructor(config, queryService) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
    }
    toPromise() {
        return this.queryService.startEnvironmentValidationAsync(this.getUrl(), this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.startProjectValidation();
    }
}
exports.StartEnvironmentValidationQuery = StartEnvironmentValidationQuery;
//# sourceMappingURL=start-project-validation-query.class.js.map