import { BaseQuery } from '../base-query';
export class GetPreviewConfigurationQuery extends BaseQuery {
    constructor(config, queryService) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
    }
    toPromise() {
        return this.queryService.getPreviewConfigurationAsync(this.getUrl(), this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.getPreviewConfigruation();
    }
}
//# sourceMappingURL=get-preview-configuration-query.class.js.map