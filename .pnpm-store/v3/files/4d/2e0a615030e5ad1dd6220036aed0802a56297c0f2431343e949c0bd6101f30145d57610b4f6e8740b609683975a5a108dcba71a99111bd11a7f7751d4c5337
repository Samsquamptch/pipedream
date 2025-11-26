"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteLanguageVariantQuery = void 0;
const base_query_1 = require("../base-query");
class DeleteLanguageVariantQuery extends base_query_1.BaseQuery {
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
exports.DeleteLanguageVariantQuery = DeleteLanguageVariantQuery;
//# sourceMappingURL=delete-language-variant-query.class.js.map