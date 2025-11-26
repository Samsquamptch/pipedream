import { LanguageVariantResponses } from '../../responses';
import { BaseListingQuery } from '../base-listing-query';
export class ListLanguageVariantsOfContentTypeQuery extends BaseListingQuery {
    constructor(config, queryService, identifier) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.identifier = identifier;
    }
    toPromise() {
        return this.queryService.listLanguageVariantsOfContentTypeAsync(this.getUrl(), this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.listLanguageVariantsOfContentType(this.identifier);
    }
    allResponseFactory(items, responses) {
        return new LanguageVariantResponses.ListAllLanguageVariantsOfContentTypeResponse({
            items: items,
            responses: responses
        });
    }
}
//# sourceMappingURL=list-language-variants-of-content-type-query.class.js.map