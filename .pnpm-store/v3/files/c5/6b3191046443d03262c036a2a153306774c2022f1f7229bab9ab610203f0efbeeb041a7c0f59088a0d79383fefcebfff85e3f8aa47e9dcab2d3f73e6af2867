import { BaseQuery } from '../base-query';
export class ChangeWorkflowOfLanguageOrVariantQuery extends BaseQuery {
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
//# sourceMappingURL=change-workflow-of-language-variant-query.class.js.map