import { Identifiers } from '../models';
export class LanguageIdAndCodenameIdentifierQuery {
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
        return this.buildResult(this.config, this.queryService, new Identifiers.LanguageIdentifier(Identifiers.LanguageIdentifierEnum.InternalId, id));
    }
    /**
    * Gets query using codename
    * @param codename Codename
    */
    byLanguageCodename(codename) {
        return this.buildResult(this.config, this.queryService, new Identifiers.LanguageIdentifier(Identifiers.LanguageIdentifierEnum.Codename, codename));
    }
}
//# sourceMappingURL=language-id-and-codename-identifier-query.class.js.map