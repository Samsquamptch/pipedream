import { Parameters } from '../../models';
import { BaseListingQuery } from '../common/base-listing-query.class';
export class LanguagesQuery extends BaseListingQuery {
    constructor(config, queryService) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        /**
         * Endpoint
         */
        this.endpoint = 'languages';
        this._queryConfig = {};
    }
    /**
     * Limits the number of taxonomies returned by query
     * @param limit Number of taxonomies to load
     */
    limitParameter(limit) {
        this.parameters.push(new Parameters.LimitParameter(limit));
        return this;
    }
    /**
     * Skips the selected number of taxonomies
     * @param skip Number of taxonomies to skip
     */
    skipParameter(skip) {
        this.parameters.push(new Parameters.SkipParameter(skip));
        return this;
    }
    toPromise() {
        var _a;
        return this.queryService.getLanguages(this.getUrl(), (_a = this._queryConfig) !== null && _a !== void 0 ? _a : {});
    }
    getUrl() {
        const action = '/' + this.endpoint;
        return super.resolveUrlInternal(action);
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
        return this.queryService.mappingService.listLanguagesResponse(json);
    }
    allResponseFactory(items, responses) {
        return {
            items: items,
            responses: responses
        };
    }
}
//# sourceMappingURL=languages-query.class.js.map