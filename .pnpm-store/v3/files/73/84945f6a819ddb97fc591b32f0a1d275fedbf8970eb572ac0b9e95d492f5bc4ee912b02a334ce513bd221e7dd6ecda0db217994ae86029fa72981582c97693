"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadBinaryFileQuery = void 0;
const base_query_1 = require("../base-query");
class UploadBinaryFileQuery extends base_query_1.BaseQuery {
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
exports.UploadBinaryFileQuery = UploadBinaryFileQuery;
//# sourceMappingURL=upload-binary-file-query.class.js.map