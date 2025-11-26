import { Parameters } from '../../models';
import { BaseQuery } from '../common/base-query.class';
export class SingleItemQuery extends BaseQuery {
    constructor(config, queryService, codename) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.codename = codename;
        this._queryConfig = {};
        if (!codename) {
            throw Error(`'codename' has to be configured for 'SingleItemQuery' query`);
        }
    }
    /**
     * Indicates depth of query that affects loading of nested linked items.
     * @param depth Depth of the query (> 0)
     */
    depthParameter(depth) {
        this.parameters.push(new Parameters.DepthParameter(depth));
        return this;
    }
    /**
     * Used to configure query
     * @param queryConfig Query configuration
     */
    queryConfig(queryConfig) {
        this._queryConfig = queryConfig;
        return this;
    }
    /**
     * Language codename
     * @param languageCodename Codename of the language
     */
    languageParameter(languageCodename) {
        this.parameters.push(new Parameters.LanguageParameter(languageCodename));
        return this;
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
    toPromise() {
        var _a;
        return this.queryService.getSingleItemAsync(this.getUrl(), (_a = this._queryConfig) !== null && _a !== void 0 ? _a : {});
    }
    getUrl() {
        const action = '/items/' + this.codename;
        // add default language is necessry
        this.processDefaultLanguageParameter();
        //process client level archived item exclusion
        this.processExcludeArchivedItemsParameter();
        return super.resolveUrlInternal(action);
    }
    map(json) {
        return this.queryService.mappingService.viewContentItemResponse(json);
    }
}
//# sourceMappingURL=single-item-query.class.js.map