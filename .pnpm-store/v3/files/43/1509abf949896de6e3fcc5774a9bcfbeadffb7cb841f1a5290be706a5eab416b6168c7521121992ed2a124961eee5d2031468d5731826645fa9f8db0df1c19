"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublishLanguageVariantQuery = void 0;
const base_query_1 = require("../base-query");
class PublishLanguageVariantQuery extends base_query_1.BaseQuery {
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
exports.PublishLanguageVariantQuery = PublishLanguageVariantQuery;
//# sourceMappingURL=publish-language-variant-query.class.js.map