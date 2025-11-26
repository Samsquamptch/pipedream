"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaxonomiesQuery = void 0;
const models_1 = require("../../models");
const base_listing_query_class_1 = require("../common/base-listing-query.class");
class TaxonomiesQuery extends base_listing_query_class_1.BaseListingQuery {
    constructor(config, queryService) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        /**
         * Taxonomies endpoint URL action
         */
        this.taxonomiesEndpoint = 'taxonomies';
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
        return this.queryService.getTaxonomies(this.getUrl(), (_a = this._queryConfig) !== null && _a !== void 0 ? _a : {});
    }
    getUrl() {
        const action = '/' + this.taxonomiesEndpoint;
        return super.resolveUrlInternal(action);
    }
    map(json) {
        return this.queryService.mappingService.listTaxonomiesResponse(json);
    }
    allResponseFactory(items, responses) {
        return {
            items: items,
            responses: responses
        };
    }
}
exports.TaxonomiesQuery = TaxonomiesQuery;
//# sourceMappingURL=taxonomies-query.class.js.map