import { Parameters } from '../../models';
import { BaseListingQuery } from '../common/base-listing-query.class';
export class MultipleTypeQuery extends BaseListingQuery {
    constructor(config, queryService) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this._queryConfig = {};
    }
    /**
     * Used to limit the number of elements returned by query.
     * @param elementCodenames Array of element codenames to fetch
     */
    elementsParameter(elementCodenames) {
        this.parameters.push(new Parameters.ElementsParameter(elementCodenames));
        return this;
    }
    /**
     * Used to exclude elements returned by query.
     * @param elementCodenames Array of element codenames to exclude
     */
    excludeElementsParameter(elementCodenames) {
        this.parameters.push(new Parameters.ExcludeElementsParameter(elementCodenames));
        return this;
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
        return this.queryService.getMultipleTypes(this.getUrl(), (_a = this._queryConfig) !== null && _a !== void 0 ? _a : {});
    }
    getUrl() {
        const action = '/types';
        return super.resolveUrlInternal(action);
    }
    map(json) {
        return this.queryService.mappingService.listContentTypesResponse(json);
    }
    allResponseFactory(items, responses) {
        return {
            items: items,
            responses: responses
        };
    }
}
//# sourceMappingURL=multiple-type-query.class.js.map