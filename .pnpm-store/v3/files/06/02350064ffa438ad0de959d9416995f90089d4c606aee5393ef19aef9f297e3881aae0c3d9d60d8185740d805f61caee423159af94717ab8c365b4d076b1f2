import { contentTypeElementsBuilder } from '../../models';
import { BaseQuery } from '../base-query';
export class AddContentTypeQuery extends BaseQuery {
    constructor(config, queryService, data) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.data = data;
    }
    toPromise() {
        return this.queryService.addContentTypeAsync(this.getUrl(), this.data(contentTypeElementsBuilder), this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.addContentType();
    }
}
//# sourceMappingURL=add-content-type-query.class.js.map