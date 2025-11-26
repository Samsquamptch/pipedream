"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageIdentifierQuery = void 0;
const models_1 = require("../models");
class LanguageIdentifierQuery {
    constructor(config, queryService, buildResult) {
        this.config = config;
        this.queryService = queryService;
        this.buildResult = buildResult;
    }
    /**
    * Gets using external Id
    * @param externalId Internal Id
    */
    byExternalId(externalId) {
        return this.buildResult(this.config, this.queryService, new models_1.Identifiers.LanguageIdentifier(models_1.Identifiers.LanguageIdentifierEnum.ExternalId, externalId));
    }
    /**
    * Gets using internal Id
    * @param id Internal Id
    */
    byLanguageId(id) {
        return this.buildResult(this.config, this.queryService, new models_1.Identifiers.LanguageIdentifier(models_1.Identifiers.LanguageIdentifierEnum.InternalId, id));
    }
    /**
    * Gets query using codename
    * @param codename Codename
    */
    byLanguageCodename(codename) {
        return this.buildResult(this.config, this.queryService, new models_1.Identifiers.LanguageIdentifier(models_1.Identifiers.LanguageIdentifierEnum.Codename, codename));
    }
}
exports.LanguageIdentifierQuery = LanguageIdentifierQuery;
//# sourceMappingURL=language-identifier-query.class.js.map