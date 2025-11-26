"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnvironmentInformationQuery = void 0;
const base_query_1 = require("../base-query");
class EnvironmentInformationQuery extends base_query_1.BaseQuery {
    constructor(config, queryService) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
    }
    toPromise() {
        return this.queryService.environmentInformationAsync(this.getUrl(), this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.environmentInformation();
    }
}
exports.EnvironmentInformationQuery = EnvironmentInformationQuery;
//# sourceMappingURL=environment-information-query.class.js.map