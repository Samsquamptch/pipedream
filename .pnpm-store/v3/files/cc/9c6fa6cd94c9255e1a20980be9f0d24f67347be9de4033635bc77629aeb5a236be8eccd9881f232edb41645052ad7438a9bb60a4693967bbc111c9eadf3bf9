import { Identifiers } from '../models';
export class CollectionIdentifierQuery {
    constructor(config, queryService, buildResult) {
        this.config = config;
        this.queryService = queryService;
        this.buildResult = buildResult;
    }
    /**
    * Gets using internal Id
    * @param id Internal Id of collection
    */
    byCollectionId(id) {
        return this.buildResult(this.config, this.queryService, new Identifiers.CollectionIdentifier(Identifiers.CollectionIdentifierEnum.InternalId, id));
    }
    /**
    * Gets query using external Id
    * @param id External Id of collection
    */
    byCollectionExternalId(id) {
        return this.buildResult(this.config, this.queryService, new Identifiers.CollectionIdentifier(Identifiers.CollectionIdentifierEnum.ExternalId, id));
    }
    /**
    * Gets query using codename
    * @param codename Codename of collection
    */
    byCollectionCodename(codename) {
        return this.buildResult(this.config, this.queryService, new Identifiers.CollectionIdentifier(Identifiers.CollectionIdentifierEnum.Codename, codename));
    }
}
//# sourceMappingURL=collection-identifier-query.class.js.map