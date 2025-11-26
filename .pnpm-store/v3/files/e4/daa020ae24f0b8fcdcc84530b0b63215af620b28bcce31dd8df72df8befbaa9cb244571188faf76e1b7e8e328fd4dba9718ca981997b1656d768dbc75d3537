import { BaseQuery } from '../base-query';
export class DeleteLanguageVariantQuery extends BaseQuery {
    constructor(config, queryService, contentItemIdentifier, languageIdentifier) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.contentItemIdentifier = contentItemIdentifier;
        this.languageIdentifier = languageIdentifier;
    }
    toPromise() {
        return this.queryService.deleteLanguageVariantAsync(this.getUrl(), this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.deleteLanguageVariant(this.contentItemIdentifier, this.languageIdentifier);
    }
}
//# sourceMappingURL=delete-language-variant-query.class.js.map