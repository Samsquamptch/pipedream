"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadAssetFromUrlQuery = void 0;
const base_query_1 = require("../base-query");
class UploadAssetFromUrlQuery extends base_query_1.BaseQuery {
    constructor(config, queryService, data) {
        super(config, queryService);
        this.config = config;
        this.queryService = queryService;
        this.data = data;
        this.withUrl('none'); // do not set url as there are multiple endpoints used
    }
    toPromise() {
        return this.queryService.uploadAssetFromUrlAsync(this.getUploadBinaryFileUrl(), this.getAddAssetUrl(), this.data, this.queryConfig);
    }
    getAddAssetUrl() {
        return super.getUrlForAction(this.apiEndpoints.addAsset());
    }
    getUploadBinaryFileUrl() {
        return super.getUrlForAction(this.apiEndpoints.uploadBinaryFile(this.data.binaryFile.filename));
    }
    getAction() {
        return this.apiEndpoints.addAsset();
    }
}
exports.UploadAssetFromUrlQuery = UploadAssetFromUrlQuery;
//# sourceMappingURL=upload-asset-from-url-query.class.js.map