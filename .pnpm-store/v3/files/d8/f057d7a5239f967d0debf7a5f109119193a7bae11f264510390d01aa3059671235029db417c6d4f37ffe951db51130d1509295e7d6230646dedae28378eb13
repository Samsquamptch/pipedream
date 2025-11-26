import { TaxonomyResponses } from '../../responses';
import { BaseListingQuery } from '../base-listing-query';
export class ListTaxonomiesQuery extends BaseListingQuery {
    constructor(config, queryService) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
    }
    toPromise() {
        return this.queryService.listTaxonomiesAsync(this.getUrl(), this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.listTaxonomies();
    }
    allResponseFactory(items, responses) {
        return new TaxonomyResponses.ListAllTaxonomiesResponse({
            items: items,
            responses: responses
        });
    }
}
//# sourceMappingURL=list-taxonomies-query.class.js.map