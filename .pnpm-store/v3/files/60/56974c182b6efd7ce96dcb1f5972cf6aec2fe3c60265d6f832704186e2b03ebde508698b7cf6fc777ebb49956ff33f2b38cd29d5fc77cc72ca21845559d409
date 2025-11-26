import { Identifiers } from '../models';
export class ContentTypeCodenameAndIdIdentifierQuery {
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
        return this.buildResult(this.config, this.queryService, new Identifiers.ContentTypeIdentifier(Identifiers.ContentTypeIdentifierEnum.InternalId, id));
    }
    /**
    * Gets query using codename
    * @param codename Codename of content item
    */
    byTypeCodename(codename) {
        return this.buildResult(this.config, this.queryService, new Identifiers.ContentTypeIdentifier(Identifiers.ContentTypeIdentifierEnum.Codename, codename));
    }
}
//# sourceMappingURL=content-type-codename-and-id-identifier-query.class.js.map