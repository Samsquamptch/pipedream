"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddContentTypeQuery = void 0;
const models_1 = require("../../models");
const base_query_1 = require("../base-query");
class AddContentTypeQuery extends base_query_1.BaseQuery {
    constructor(config, queryService, data) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.data = data;
    }
    toPromise() {
        return this.queryService.addContentTypeAsync(this.getUrl(), this.data(models_1.contentTypeElementsBuilder), this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.addContentType();
    }
}
exports.AddContentTypeQuery = AddContentTypeQuery;
//# sourceMappingURL=add-content-type-query.class.js.map