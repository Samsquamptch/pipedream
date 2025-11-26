"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentTypeIdentifierQuery = void 0;
const models_1 = require("../models");
class ContentTypeIdentifierQuery {
    constructor(config, queryService, buildResult) {
        this.config = config;
        this.queryService = queryService;
        this.buildResult = buildResult;
    }
    /**
    * Gets using internal Id
    * @param id Internal Id of content item
    */
    byTypeId(id) {
        return this.buildResult(this.config, this.queryService, new models_1.Identifiers.ContentTypeIdentifier(models_1.Identifiers.ContentTypeIdentifierEnum.InternalId, id));
    }
    /**
    * Gets query using external Id
    * @param id External Id of content item
    */
    byTypeExternalId(id) {
        return this.buildResult(this.config, this.queryService, new models_1.Identifiers.ContentTypeIdentifier(models_1.Identifiers.ContentTypeIdentifierEnum.ExternalId, id));
    }
    /**
    * Gets query using codename
    * @param codename Codename of content item
    */
    byTypeCodename(codename) {
        return this.buildResult(this.config, this.queryService, new models_1.Identifiers.ContentTypeIdentifier(models_1.Identifiers.ContentTypeIdentifierEnum.Codename, codename));
    }
}
exports.ContentTypeIdentifierQuery = ContentTypeIdentifierQuery;
//# sourceMappingURL=content-type-identifier-query.class.js.map