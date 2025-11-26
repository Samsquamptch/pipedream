"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyncChangesQuery = void 0;
const base_listing_query_class_1 = require("../common/base-listing-query.class");
class SyncChangesQuery extends base_listing_query_class_1.BaseListingQuery {
    constructor(config, queryService) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this._queryConfig = {};
        this.action = '/sync';
    }
    toPromise() {
        var _a;
        return this.queryService.syncChanges(this.getUrl(), (_a = this._queryConfig) !== null && _a !== void 0 ? _a : {});
    }
    getUrl() {
        return super.resolveUrlInternal(this.action);
    }
    /**
     * Used to configure query
     * @param queryConfig Query configuration
     */
    queryConfig(queryConfig) {
        this._queryConfig = queryConfig;
        return this;
    }
    map(json) {
        return this.queryService.mappingService.syncChanges(json);
    }
    allResponseFactory(items, responses) {
        return {
            items: items,
            responses: responses
        };
    }
}
exports.SyncChangesQuery = SyncChangesQuery;
//# sourceMappingURL=sync-changes-query.class.js.map