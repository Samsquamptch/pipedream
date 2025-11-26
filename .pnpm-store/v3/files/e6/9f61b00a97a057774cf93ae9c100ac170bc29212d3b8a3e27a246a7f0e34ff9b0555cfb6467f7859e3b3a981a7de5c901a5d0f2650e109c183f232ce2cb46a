"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CancelScheduledUnpublishingOfLanguageVariantQuery = void 0;
const base_query_1 = require("../base-query");
class CancelScheduledUnpublishingOfLanguageVariantQuery extends base_query_1.BaseQuery {
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
exports.CancelScheduledUnpublishingOfLanguageVariantQuery = CancelScheduledUnpublishingOfLanguageVariantQuery;
//# sourceMappingURL=cancel-scheduled-unpublishing-of-language-variant-query.class.js.map