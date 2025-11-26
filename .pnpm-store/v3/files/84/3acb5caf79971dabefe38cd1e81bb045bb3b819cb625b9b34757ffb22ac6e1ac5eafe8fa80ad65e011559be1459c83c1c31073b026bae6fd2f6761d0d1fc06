import { BaseListingQuery } from '../common/base-listing-query.class';
export class SyncChangesQuery extends BaseListingQuery {
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
//# sourceMappingURL=sync-changes-query.class.js.map