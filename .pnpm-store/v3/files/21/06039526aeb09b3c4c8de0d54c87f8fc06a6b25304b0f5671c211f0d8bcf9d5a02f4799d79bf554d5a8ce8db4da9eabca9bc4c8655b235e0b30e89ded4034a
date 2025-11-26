import { BaseQuery } from '../base-query';
export class CreateNewVersionOfLanguageVariantQuery extends BaseQuery {
    constructor(config, queryService, contentItemIdentifier, languageIdentifier) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.contentItemIdentifier = contentItemIdentifier;
        this.languageIdentifier = languageIdentifier;
    }
    toPromise() {
        return this.queryService.createNewVersionOfLanguageVariantAsync(this.getUrl(), this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.createNewVersionOfALanguageVariant(this.contentItemIdentifier, this.languageIdentifier);
    }
}
//# sourceMappingURL=create-new-version-of-language-variant-query.class.js.map