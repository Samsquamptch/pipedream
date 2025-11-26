import { BaseQuery } from '../base-query';
export class ViewLanguageQuery extends BaseQuery {
    constructor(config, queryService, identifier) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.identifier = identifier;
    }
    toPromise() {
        return this.queryService.viewLanguageAsync(this.getUrl(), this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.viewLanguage(this.identifier);
    }
}
//# sourceMappingURL=view-language-query.class.js.map