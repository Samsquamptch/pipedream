"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPreviewConfigurationQuery = void 0;
const base_query_1 = require("../base-query");
class GetPreviewConfigurationQuery extends base_query_1.BaseQuery {
    constructor(config, queryService) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
    }
    toPromise() {
        return this.queryService.getPreviewConfigurationAsync(this.getUrl(), this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.getPreviewConfigruation();
    }
}
exports.GetPreviewConfigurationQuery = GetPreviewConfigurationQuery;
//# sourceMappingURL=get-preview-configuration-query.class.js.map