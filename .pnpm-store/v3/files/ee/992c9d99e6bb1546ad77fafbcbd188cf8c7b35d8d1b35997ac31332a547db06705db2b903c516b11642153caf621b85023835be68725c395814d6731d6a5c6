"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CancelScheduledPublishingOfLanguageVariantQuery = void 0;
const base_query_1 = require("../base-query");
class CancelScheduledPublishingOfLanguageVariantQuery extends base_query_1.BaseQuery {
    constructor(config, queryService, contentItemIdentifier, languageIdentifier) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.contentItemIdentifier = contentItemIdentifier;
        this.languageIdentifier = languageIdentifier;
    }
    toPromise() {
        return this.queryService.cancelScheduledPublishingOfLanguageVariantAsync(this.getUrl(), this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.cancelScheduledPublishingOfLanguageVariant(this.contentItemIdentifier, this.languageIdentifier);
    }
}
exports.CancelScheduledPublishingOfLanguageVariantQuery = CancelScheduledPublishingOfLanguageVariantQuery;
//# sourceMappingURL=cancel-scheduled-publishing-of-language-variant-query.class.js.map