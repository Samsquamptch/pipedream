"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaxonomyIdentifierQuery = void 0;
const models_1 = require("../models");
class TaxonomyIdentifierQuery {
    constructor(config, queryService, buildResult) {
        this.config = config;
        this.queryService = queryService;
        this.buildResult = buildResult;
    }
    /**
    * Gets using internal Id
    * @param id Internal Id of content item
    */
    byTaxonomyId(id) {
        return this.buildResult(this.config, this.queryService, new models_1.Identifiers.TaxonomyIdentifier(models_1.Identifiers.TaxonomyIdentifierEnum.InternalId, id));
    }
    /**
    * Gets query using external Id
    * @param id External Id of content item
    */
    byTaxonomyExternalId(id) {
        return this.buildResult(this.config, this.queryService, new models_1.Identifiers.TaxonomyIdentifier(models_1.Identifiers.TaxonomyIdentifierEnum.ExternalId, id));
    }
    /**
    * Gets query using codename
    * @param codename Codename of content item
    */
    byTaxonomyCodename(codename) {
        return this.buildResult(this.config, this.queryService, new models_1.Identifiers.TaxonomyIdentifier(models_1.Identifiers.TaxonomyIdentifierEnum.Codename, codename));
    }
}
exports.TaxonomyIdentifierQuery = TaxonomyIdentifierQuery;
//# sourceMappingURL=taxonomy-identifier-query.class.js.map