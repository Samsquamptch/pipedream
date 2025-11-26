"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguagesQuery = void 0;
const models_1 = require("../../models");
const base_listing_query_class_1 = require("../common/base-listing-query.class");
class LanguagesQuery extends base_listing_query_class_1.BaseListingQuery {
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
        this.parameters.push(new models_1.Parameters.LimitParameter(limit));
        return this;
    }
    /**
     * Skips the selected number of taxonomies
     * @param skip Number of taxonomies to skip
     */
    skipParameter(skip) {
        this.parameters.push(new models_1.Parameters.SkipParameter(skip));
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
exports.LanguagesQuery = LanguagesQuery;
//# sourceMappingURL=languages-query.class.js.map