import { LanguageVariantResponses } from '../../responses';
import { BaseListingQuery } from '../base-listing-query';
export class ListLanguageVariantsOfContentTypeWithComponentsQuery extends BaseListingQuery {
    constructor(config, queryService, identifier) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.identifier = identifier;
    }
    toPromise() {
        return this.queryService.listLanguageVariantsOfContentTypeWithComponentsAsync(this.getUrl(), this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.listLanguageVariantsOfContentTypeWithComponents(this.identifier);
    }
    allResponseFactory(items, responses) {
        return new LanguageVariantResponses.ListAllLanguageVariantsOfContentTypeWithComponentsResponse({
            items: items,
            responses: responses
        });
    }
}
//# sourceMappingURL=list-language-variants-of-content-type-with-components-query.class.js.map