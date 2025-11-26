import { Identifiers } from '../models';
export class TaxonomyIdentifierQuery {
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
        return this.buildResult(this.config, this.queryService, new Identifiers.TaxonomyIdentifier(Identifiers.TaxonomyIdentifierEnum.InternalId, id));
    }
    /**
    * Gets query using external Id
    * @param id External Id of content item
    */
    byTaxonomyExternalId(id) {
        return this.buildResult(this.config, this.queryService, new Identifiers.TaxonomyIdentifier(Identifiers.TaxonomyIdentifierEnum.ExternalId, id));
    }
    /**
    * Gets query using codename
    * @param codename Codename of content item
    */
    byTaxonomyCodename(codename) {
        return this.buildResult(this.config, this.queryService, new Identifiers.TaxonomyIdentifier(Identifiers.TaxonomyIdentifierEnum.Codename, codename));
    }
}
//# sourceMappingURL=taxonomy-identifier-query.class.js.map