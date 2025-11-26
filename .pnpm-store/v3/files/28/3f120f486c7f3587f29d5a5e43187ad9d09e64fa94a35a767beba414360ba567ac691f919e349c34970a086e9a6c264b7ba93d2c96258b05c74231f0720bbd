"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentItemExternalIdIdentifierQuery = void 0;
const models_1 = require("../models");
class ContentItemExternalIdIdentifierQuery {
    constructor(config, queryService, buildResult) {
        this.config = config;
        this.queryService = queryService;
        this.buildResult = buildResult;
    }
    byItemExternalId(externalId) {
        return this.buildResult(this.config, this.queryService, new models_1.Identifiers.ContentItemIdentifier(models_1.Identifiers.ContentItemIdentifierEnum.ExternalId, externalId));
    }
}
exports.ContentItemExternalIdIdentifierQuery = ContentItemExternalIdIdentifierQuery;
//# sourceMappingURL=content-item-external-id-identifier.class.js.map