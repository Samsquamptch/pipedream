import { LanguageVariantResponses } from '../../responses';
import { BaseListingQuery } from '../base-listing-query';
export class ListLanguageVariantsByCollectionQuery extends BaseListingQuery {
    constructor(config, queryService, identifier) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.identifier = identifier;
    }
    toPromise() {
        return this.queryService.listLanguageVariantsByCollectionAsync(this.getUrl(), this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.listLanguageVariantsByCollection(this.identifier);
    }
    allResponseFactory(items, responses) {
        return new LanguageVariantResponses.ListAllLanguageVariantsByCollectionResponse({
            items: items,
            responses: responses
        });
    }
}
//# sourceMappingURL=list-language-variants-by-collection-query.class.js.map