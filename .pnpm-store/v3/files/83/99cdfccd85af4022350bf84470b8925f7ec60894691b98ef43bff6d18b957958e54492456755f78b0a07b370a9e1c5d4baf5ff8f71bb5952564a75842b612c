"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageIdAndCodenameIdentifierQuery = void 0;
const models_1 = require("../models");
class LanguageIdAndCodenameIdentifierQuery {
    constructor(config, queryService, buildResult) {
        this.config = config;
        this.queryService = queryService;
        this.buildResult = buildResult;
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
exports.LanguageIdAndCodenameIdentifierQuery = LanguageIdAndCodenameIdentifierQuery;
//# sourceMappingURL=language-id-and-codename-identifier-query.class.js.map