"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdCodenameIdentifierQuery = void 0;
const models_1 = require("../models");
class IdCodenameIdentifierQuery {
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
    * Gets query using codename
    * @param codename Codename
    */
    byItemCodename(codename) {
        return this.buildResult(this.config, this.queryService, new models_1.Identifiers.ContentItemIdentifier(models_1.Identifiers.ContentItemIdentifierEnum.Codename, codename));
    }
}
exports.IdCodenameIdentifierQuery = IdCodenameIdentifierQuery;
//# sourceMappingURL=id-codename-identifier-query.class.js.map