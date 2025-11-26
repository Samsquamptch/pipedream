import { BaseQuery } from '../base-query';
export class UnpublishLanguageVariantQuery extends BaseQuery {
    constructor(config, queryService, contentItemIdentifier, languageIdentifier, data) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.contentItemIdentifier = contentItemIdentifier;
        this.languageIdentifier = languageIdentifier;
        this.data = data;
    }
    toPromise() {
        return this.queryService.unpublishLanguageVariantAsync(this.getUrl(), this.data, this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.unpublishLanguageVariant(this.contentItemIdentifier, this.languageIdentifier);
    }
}
//# sourceMappingURL=unpublish-language-variant-query.class.js.map