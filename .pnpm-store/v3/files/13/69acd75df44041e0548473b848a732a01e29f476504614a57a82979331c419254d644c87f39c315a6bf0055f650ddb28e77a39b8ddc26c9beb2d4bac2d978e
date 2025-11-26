import { BaseQuery } from '../base-query';
export class AddLanguageQuery extends BaseQuery {
    constructor(config, queryService, data) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.data = data;
    }
    toPromise() {
        return this.queryService.addLanguageAsync(this.getUrl(), this.queryConfig, this.data);
    }
    getAction() {
        return this.apiEndpoints.addLanguage();
    }
}
//# sourceMappingURL=add-language-query.class.js.map