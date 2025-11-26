import { BaseQuery } from '../base-query';
export class UploadBinaryFileQuery extends BaseQuery {
    constructor(config, queryService, data) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.data = data;
    }
    toPromise() {
        return this.queryService.uploadBinaryFileAsync(this.getUrl(), this.data, this.queryConfig);
    }
    getAction() {
        return this.apiEndpoints.uploadBinaryFile(this.data.filename);
    }
}
//# sourceMappingURL=upload-binary-file-query.class.js.map