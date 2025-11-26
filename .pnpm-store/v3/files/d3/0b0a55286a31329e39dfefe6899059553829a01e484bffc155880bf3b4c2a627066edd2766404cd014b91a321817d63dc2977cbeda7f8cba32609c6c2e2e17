"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdIdentifierQuery = void 0;
const models_1 = require("../models");
class IdIdentifierQuery {
    constructor(config, queryService, buildResult) {
        this.config = config;
        this.queryService = queryService;
        this.buildResult = buildResult;
    }
    /**
    * Gets using internal Id
    * @param id Internal Id
    */
    byItemId(id) {
        return this.buildResult(this.config, this.queryService, new models_1.Identifiers.ContentItemIdentifier(models_1.Identifiers.ContentItemIdentifierEnum.InternalId, id));
    }
    /**
    * Gets query using external Id
    * @param externalId External Id
    */
    byItemExternalId(externalId) {
        return this.buildResult(this.config, this.queryService, new models_1.Identifiers.ContentItemIdentifier(models_1.Identifiers.ContentItemIdentifierEnum.ExternalId, externalId));
    }
}
exports.IdIdentifierQuery = IdIdentifierQuery;
//# sourceMappingURL=id-and-external-id-identifier-query.class.js.map