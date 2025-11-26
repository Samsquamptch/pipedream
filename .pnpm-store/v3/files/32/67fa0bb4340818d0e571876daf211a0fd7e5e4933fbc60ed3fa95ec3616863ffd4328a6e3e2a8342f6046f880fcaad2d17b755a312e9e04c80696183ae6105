import { BaseQuery } from '../base-query';
export class ListSpacesQuery extends BaseQuery {
    constructor(config, queryService) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
    }
    toPromise() {
        return this.queryService.listSpacesAsync(this.getUrl(), this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.listSpaces();
    }
}
//# sourceMappingURL=list-spaces-query.class.js.map