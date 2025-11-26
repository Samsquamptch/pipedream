"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListEnvironmentValidationIssuesQuery = void 0;
const responses_1 = require("../../responses");
const base_listing_query_1 = require("../base-listing-query");
class ListEnvironmentValidationIssuesQuery extends base_listing_query_1.BaseListingQuery {
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
        return new responses_1.EnvironmentResponses.EnvironmentValidationIssuesListAllResponse({
            items: items,
            responses: responses
        });
    }
}
exports.ListEnvironmentValidationIssuesQuery = ListEnvironmentValidationIssuesQuery;
//# sourceMappingURL=list-project-validation-issues-query.class.js.map