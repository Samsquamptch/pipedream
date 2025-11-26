"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SingleTypeQuery = void 0;
const base_query_class_1 = require("../common/base-query.class");
class SingleTypeQuery extends base_query_class_1.BaseQuery {
    constructor(config, queryService, typeCodename) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.typeCodename = typeCodename;
        this._queryConfig = {};
        if (!typeCodename) {
            throw Error(`Cannot create type query without the codename of the type`);
        }
    }
    toPromise() {
        var _a;
        return this.queryService.getSingleType(this.getUrl(), (_a = this._queryConfig) !== null && _a !== void 0 ? _a : {});
    }
    getUrl() {
        const action = '/types/' + this.typeCodename;
        return super.resolveUrlInternal(action);
    }
    map(json) {
        return this.queryService.mappingService.viewContentTypeResponse(json);
    }
}
exports.SingleTypeQuery = SingleTypeQuery;
//# sourceMappingURL=single-type-query.class.js.map