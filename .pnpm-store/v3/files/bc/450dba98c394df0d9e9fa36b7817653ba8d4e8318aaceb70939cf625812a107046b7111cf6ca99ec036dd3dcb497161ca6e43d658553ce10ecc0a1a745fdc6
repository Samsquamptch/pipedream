import { BaseQuery } from '../base-query';
export class PublishLanguageVariantQuery extends BaseQuery {
    constructor(config, queryService, contentItemIdentifier, languageIdentifier, data) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.contentItemIdentifier = contentItemIdentifier;
        this.languageIdentifier = languageIdentifier;
        this.data = data;
    }
    toPromise() {
        return this.queryService.publishLanguageVariantAsync(this.getUrl(), this.data, this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.publishLaguageVariant(this.contentItemIdentifier, this.languageIdentifier);
    }
}
//# sourceMappingURL=publish-language-variant-query.class.js.map