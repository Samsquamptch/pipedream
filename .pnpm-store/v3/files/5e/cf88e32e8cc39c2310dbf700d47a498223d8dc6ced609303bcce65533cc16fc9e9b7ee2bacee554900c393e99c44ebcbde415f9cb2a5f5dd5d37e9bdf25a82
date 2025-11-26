"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitializeSyncQuery = void 0;
const models_1 = require("../../models");
const base_query_class_1 = require("../common/base-query.class");
class InitializeSyncQuery extends base_query_class_1.BaseQuery {
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
        this.parameters.push(new models_1.Filters.TypeFilter(type));
        return this;
    }
    /**
     * Gets only item from given collection
     * @param collection Codename of collection to get
     */
    collection(collection) {
        this.parameters.push(new models_1.Filters.CollectionFilter(collection));
        return this;
    }
    /**
     * Language codename
     * @param languageCodename Codename of the language
     */
    languageParameter(languageCodename) {
        this.parameters.push(new models_1.Parameters.LanguageParameter(languageCodename));
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
exports.InitializeSyncQuery = InitializeSyncQuery;
//# sourceMappingURL=initialize-sync-query.class.js.map