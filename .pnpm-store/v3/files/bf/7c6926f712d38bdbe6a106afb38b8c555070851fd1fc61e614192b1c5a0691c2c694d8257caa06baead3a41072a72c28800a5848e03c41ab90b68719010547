import { LanguageResponses } from '../../responses';
import { BaseListingQuery } from '../base-listing-query';
export class ListLanguagesQuery extends BaseListingQuery {
    constructor(config, queryService) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
    }
    toPromise() {
        return this.queryService.listLanguagesAsync(this.getUrl(), this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.listLanguages();
    }
    allResponseFactory(items, responses) {
        return new LanguageResponses.ListAllLanguagesResponse({
            items: items,
            responses: responses
        });
    }
}
//# sourceMappingURL=list-languages-query.class.js.map