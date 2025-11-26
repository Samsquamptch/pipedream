import { BaseQuery } from '../base-query';
export class CancelScheduledUnpublishingOfLanguageVariantQuery extends BaseQuery {
    constructor(config, queryService, contentItemIdentifier, languageIdentifier) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.contentItemIdentifier = contentItemIdentifier;
        this.languageIdentifier = languageIdentifier;
    }
    toPromise() {
        return this.queryService.cancelScheduledUnpublishingOfLanguageVariantAsync(this.getUrl(), this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.cancelScheduledUnpublishingOfLanguageVariant(this.contentItemIdentifier, this.languageIdentifier);
    }
}
//# sourceMappingURL=cancel-scheduled-unpublishing-of-language-variant-query.class.js.map