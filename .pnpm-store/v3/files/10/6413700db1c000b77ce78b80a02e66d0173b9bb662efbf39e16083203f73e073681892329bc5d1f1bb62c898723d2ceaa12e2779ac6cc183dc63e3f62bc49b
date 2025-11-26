"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddContentItemQueryInit = exports.AddContentItemQuery = void 0;
const base_query_1 = require("../base-query");
class AddContentItemQuery extends base_query_1.BaseQuery {
    constructor(config, queryService, data) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.data = data;
    }
    toPromise() {
        return this.queryService.addContentItemAsync(this.getUrl(), this.data, this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.addContentItem();
    }
}
exports.AddContentItemQuery = AddContentItemQuery;
class AddContentItemQueryInit {
    constructor(config, queryService) {
        this.config = config;
        this.queryService = queryService;
    }
    withData(item) {
        return new AddContentItemQuery(this.config, this.queryService, item);
    }
}
exports.AddContentItemQueryInit = AddContentItemQueryInit;
//# sourceMappingURL=add-content-item-query.class.js.map