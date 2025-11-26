"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaxonomyQuery = void 0;
const base_query_class_1 = require("../common/base-query.class");
class TaxonomyQuery extends base_query_class_1.BaseQuery {
    constructor(config, queryService, taxonomyCodename) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.taxonomyCodename = taxonomyCodename;
        /**
         * Taxonomies endpoint URL action
         */
        this.taxonomiesEndpoint = 'taxonomies';
        this._queryConfig = {};
        if (!taxonomyCodename) {
            throw Error(`Cannot create taxonomy query without codename of the taxonomy`);
        }
    }
    toPromise() {
        var _a;
        return this.queryService.getTaxonomy(this.getUrl(), (_a = this._queryConfig) !== null && _a !== void 0 ? _a : {});
    }
    getUrl() {
        const action = '/' + this.taxonomiesEndpoint + '/' + this.taxonomyCodename;
        return super.resolveUrlInternal(action);
    }
    map(json) {
        return this.queryService.mappingService.viewTaxonomyResponse(json);
    }
}
exports.TaxonomyQuery = TaxonomyQuery;
//# sourceMappingURL=taxonomy-query.class.js.map