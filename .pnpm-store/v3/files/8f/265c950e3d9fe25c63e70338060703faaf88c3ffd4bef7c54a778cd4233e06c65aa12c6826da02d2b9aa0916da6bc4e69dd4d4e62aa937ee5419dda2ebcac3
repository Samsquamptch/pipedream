import { LanguageVariantResponses } from '../../responses';
import { BaseListingQuery } from '../base-listing-query';
export class ListLanguageVariantsBySpaceQuery extends BaseListingQuery {
    constructor(config, queryService, identifier) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.identifier = identifier;
    }
    toPromise() {
        return this.queryService.listLanguageVariantsBySpaceAsync(this.getUrl(), this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.listLanguageVariantsBySpace(this.identifier);
    }
    allResponseFactory(items, responses) {
        return new LanguageVariantResponses.ListAllLanguageVariantsBySpaceResponse({
            items: items,
            responses: responses
        });
    }
}
//# sourceMappingURL=list-language-variants-by-space-query.class.js.map