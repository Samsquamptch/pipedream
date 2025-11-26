import { Filters, Parameters } from '../../models';
import { BaseQuery } from '../common/base-query.class';
export class InitializeSyncQuery extends BaseQuery {
    constructor(config, queryService) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.endpoint = 'sync/init';
        this._queryConfig = {};
    }
    /**
     * Gets only item of given type
     * @param type Codename of type to get
     */
    type(type) {
        this.parameters.push(new Filters.TypeFilter(type));
        return this;
    }
    /**
     * Gets only item from given collection
     * @param collection Codename of collection to get
     */
    collection(collection) {
        this.parameters.push(new Filters.CollectionFilter(collection));
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
    toPromise() {
        var _a;
        return this.queryService.initializeSync(this.getUrl(), (_a = this._queryConfig) !== null && _a !== void 0 ? _a : {});
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
        return this.queryService.mappingService.initializeContentSync(json);
    }
}
//# sourceMappingURL=initialize-sync-query.class.js.map