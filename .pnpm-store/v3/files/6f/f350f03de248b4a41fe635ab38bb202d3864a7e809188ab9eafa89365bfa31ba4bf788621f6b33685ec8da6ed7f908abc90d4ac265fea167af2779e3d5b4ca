import { Identifiers } from '../models';
export class IdCodenameIdentifierQuery {
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
        return this.buildResult(this.config, this.queryService, new Identifiers.ContentItemIdentifier(Identifiers.ContentItemIdentifierEnum.InternalId, id));
    }
    /**
    * Gets query using codename
    * @param codename Codename
    */
    byItemCodename(codename) {
        return this.buildResult(this.config, this.queryService, new Identifiers.ContentItemIdentifier(Identifiers.ContentItemIdentifierEnum.Codename, codename));
    }
}
//# sourceMappingURL=id-codename-identifier-query.class.js.map