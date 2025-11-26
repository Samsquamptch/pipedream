"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModifyPreviewConfigurationQuery = void 0;
const base_query_1 = require("../base-query");
class ModifyPreviewConfigurationQuery extends base_query_1.BaseQuery {
    constructor(config, queryService, data) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.data = data;
    }
    toPromise() {
        return this.queryService.modifyPreviewConfigurationAsync(this.getUrl(), this.queryConfig, this.data);
    }
    getAction() {
        return this.apiEndpoints.modifyPreviewConfigruation();
    }
}
exports.ModifyPreviewConfigurationQuery = ModifyPreviewConfigurationQuery;
//# sourceMappingURL=modify-preview-configuration-query.class.js.map