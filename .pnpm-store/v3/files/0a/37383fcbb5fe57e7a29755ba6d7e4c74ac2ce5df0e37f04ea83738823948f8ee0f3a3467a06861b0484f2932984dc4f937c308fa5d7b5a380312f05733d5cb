import { BaseQuery } from '../common/base-query.class';
export class ElementQuery extends BaseQuery {
    constructor(config, queryService, typeCodename, elementCodename) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.typeCodename = typeCodename;
        this.elementCodename = elementCodename;
        this._queryConfig = {};
        if (!typeCodename) {
            throw Error(`Codename of the type has to be provided`);
        }
        if (!elementCodename) {
            throw Error(`Codename of the element has to be provided`);
        }
    }
    toPromise() {
        var _a;
        return this.queryService.getElementAsync(this.getUrl(), (_a = this._queryConfig) !== null && _a !== void 0 ? _a : {});
    }
    getUrl() {
        return super.resolveUrlInternal(`/types/${this.typeCodename}/elements/${this.elementCodename}`);
    }
    map(json) {
        return this.queryService.mappingService.viewContentTypeElementResponse(json);
    }
}
//# sourceMappingURL=element-query.class.js.map