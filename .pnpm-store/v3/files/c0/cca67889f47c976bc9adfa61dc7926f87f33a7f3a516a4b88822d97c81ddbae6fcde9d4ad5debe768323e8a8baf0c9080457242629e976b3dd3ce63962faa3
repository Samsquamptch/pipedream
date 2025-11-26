"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentTypeCodenameAndIdIdentifierQuery = void 0;
const models_1 = require("../models");
class ContentTypeCodenameAndIdIdentifierQuery {
    constructor(config, queryService, buildResult) {
        this.config = config;
        this.queryService = queryService;
        this.buildResult = buildResult;
    }
    /**
    * Gets query using internal Id
    * @param id Internal Id of content item
    */
    byTypeId(id) {
        return this.buildResult(this.config, this.queryService, new models_1.Identifiers.ContentTypeIdentifier(models_1.Identifiers.ContentTypeIdentifierEnum.InternalId, id));
    }
    /**
    * Gets query using codename
    * @param codename Codename of content item
    */
    byTypeCodename(codename) {
        return this.buildResult(this.config, this.queryService, new models_1.Identifiers.ContentTypeIdentifier(models_1.Identifiers.ContentTypeIdentifierEnum.Codename, codename));
    }
}
exports.ContentTypeCodenameAndIdIdentifierQuery = ContentTypeCodenameAndIdIdentifierQuery;
//# sourceMappingURL=content-type-codename-and-id-identifier-query.class.js.map