import { BaseQuery } from '../base-query';
export class ListLanguageVariantsOfItemQuery extends BaseQuery {
    constructor(config, queryService, identifier) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.identifier = identifier;
    }
    toPromise() {
        return this.queryService.listLanguageVariantsOfItemAsync(this.getUrl(), this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.listLanguageVariantsOfItem(this.identifier);
    }
}
//# sourceMappingURL=list-language-variants-of-item-query.class.js.map