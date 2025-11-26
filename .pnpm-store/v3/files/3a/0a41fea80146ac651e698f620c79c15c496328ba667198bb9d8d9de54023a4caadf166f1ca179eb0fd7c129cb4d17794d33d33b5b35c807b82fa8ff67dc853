import { BaseQuery } from '../base-query';
export class ModifyPreviewConfigurationQuery extends BaseQuery {
    constructor(config, queryService, data) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.data = data;
    }
    toPromise() {
        return this.queryService.modifyPreviewConfigurationAsync(this.getUrl(), this.queryConfig, this.data);
    }
    getAction() {
        return this.apiEndpoints.modifyPreviewConfigruation();
    }
}
//# sourceMappingURL=modify-preview-configuration-query.class.js.map