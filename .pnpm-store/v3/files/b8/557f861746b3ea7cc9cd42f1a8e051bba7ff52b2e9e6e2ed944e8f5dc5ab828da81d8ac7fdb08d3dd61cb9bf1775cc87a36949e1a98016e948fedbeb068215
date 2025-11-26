import { BaseQuery } from '../base-query';
export class ModifyLanguageQuery extends BaseQuery {
    constructor(config, queryService, identifier, data) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.identifier = identifier;
        this.data = data;
    }
    toPromise() {
        return this.queryService.modifyLanguageAsync(this.getUrl(), this.queryConfig, this.data);
    }
    getAction() {
        return this.apiEndpoints.modifyLanguage(this.identifier);
    }
}
//# sourceMappingURL=modify-language-query.class.js.map