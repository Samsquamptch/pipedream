"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RenditionIdentifierQuery = void 0;
const models_1 = require("../models");
class RenditionIdentifierQuery {
    constructor(config, queryService, buildResult) {
        this.config = config;
        this.queryService = queryService;
        this.buildResult = buildResult;
    }
    /**
    * Gets using internal Id
    * @param id Internal Id of content item
    */
    byRenditionId(id) {
        return this.buildResult(this.config, this.queryService, new models_1.Identifiers.RenditionIdentifier(models_1.Identifiers.RenditionIdentifierEnum.InternalId, id));
    }
    /**
    * Gets query using external Id
    * @param id External Id of content item
    */
    byRenditionExternalId(id) {
        return this.buildResult(this.config, this.queryService, new models_1.Identifiers.RenditionIdentifier(models_1.Identifiers.RenditionIdentifierEnum.ExternalId, id));
    }
}
exports.RenditionIdentifierQuery = RenditionIdentifierQuery;
//# sourceMappingURL=rendition-identifier-query.class.js.map