"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentItemIdentifierQuery = void 0;
const models_1 = require("../models");
class ContentItemIdentifierQuery {
    constructor(config, queryService, buildResult) {
        this.config = config;
        this.queryService = queryService;
        this.buildResult = buildResult;
    }
    /**
    * Gets using internal Id
    * @param id Internal Id of content item
    */
    byItemId(id) {
        return this.buildResult(this.config, this.queryService, new models_1.Identifiers.ContentItemIdentifier(models_1.Identifiers.ContentItemIdentifierEnum.InternalId, id));
    }
    /**
    * Gets query using external Id
    * @param id External Id of content item
    */
    byItemExternalId(id) {
        return this.buildResult(this.config, this.queryService, new models_1.Identifiers.ContentItemIdentifier(models_1.Identifiers.ContentItemIdentifierEnum.ExternalId, id));
    }
    /**
    * Gets query using codename
    * @param codename Codename of content item
    */
    byItemCodename(codename) {
        return this.buildResult(this.config, this.queryService, new models_1.Identifiers.ContentItemIdentifier(models_1.Identifiers.ContentItemIdentifierEnum.Codename, codename));
    }
}
exports.ContentItemIdentifierQuery = ContentItemIdentifierQuery;
//# sourceMappingURL=content-item-identifier-query.class.js.map