"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateNewVersionOfLanguageVariantQuery = void 0;
const base_query_1 = require("../base-query");
class CreateNewVersionOfLanguageVariantQuery extends base_query_1.BaseQuery {
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
exports.CreateNewVersionOfLanguageVariantQuery = CreateNewVersionOfLanguageVariantQuery;
//# sourceMappingURL=create-new-version-of-language-variant-query.class.js.map