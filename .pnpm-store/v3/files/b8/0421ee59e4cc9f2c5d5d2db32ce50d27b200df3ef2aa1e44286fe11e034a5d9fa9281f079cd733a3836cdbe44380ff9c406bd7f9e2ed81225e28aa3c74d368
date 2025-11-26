import { EnvironmentResponses } from '../../responses';
import { BaseListingQuery } from '../base-listing-query';
export class ListEnvironmentValidationIssuesQuery extends BaseListingQuery {
    constructor(config, queryService, taskIdentifier) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.taskIdentifier = taskIdentifier;
    }
    toPromise() {
        return this.queryService.listEnvironmentValidationIssuesAsync(this.getUrl(), this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.listEnvironmentIssues(this.taskIdentifier);
    }
    allResponseFactory(items, responses) {
        return new EnvironmentResponses.EnvironmentValidationIssuesListAllResponse({
            items: items,
            responses: responses
        });
    }
}
//# sourceMappingURL=list-project-validation-issues-query.class.js.map