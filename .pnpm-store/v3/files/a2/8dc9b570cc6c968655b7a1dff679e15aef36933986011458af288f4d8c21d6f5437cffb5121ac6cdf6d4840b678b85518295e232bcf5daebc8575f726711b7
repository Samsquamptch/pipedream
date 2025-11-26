"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeWorkflowOfLanguageOrVariantQuery = void 0;
const base_query_1 = require("../base-query");
class ChangeWorkflowOfLanguageOrVariantQuery extends base_query_1.BaseQuery {
    constructor(config, queryService, contentItemIdentifier, languageIdentifier, data) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.contentItemIdentifier = contentItemIdentifier;
        this.languageIdentifier = languageIdentifier;
        this.data = data;
    }
    toPromise() {
        return this.queryService.changeWorkflowOfLanguageVariantAsync(this.getUrl(), this.data, this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.changeWorkflowOfLanguageVariant(this.contentItemIdentifier, this.languageIdentifier);
    }
}
exports.ChangeWorkflowOfLanguageOrVariantQuery = ChangeWorkflowOfLanguageOrVariantQuery;
//# sourceMappingURL=change-workflow-of-language-variant-query.class.js.map