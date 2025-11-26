import { Identifiers } from '../models';
export class SpaceIdentifierQuery {
    constructor(config, queryService, buildResult) {
        this.config = config;
        this.queryService = queryService;
        this.buildResult = buildResult;
    }
    /**
    * Gets using internal Id
    * @param id Internal Id of space
    */
    bySpaceId(id) {
        return this.buildResult(this.config, this.queryService, new Identifiers.SpaceIdentifier(Identifiers.SpaceIdentifierEnum.InternalId, id));
    }
    /**
    * Gets query using external Id
    * @param id External Id of space
    */
    bySpaceExternalId(id) {
        return this.buildResult(this.config, this.queryService, new Identifiers.SpaceIdentifier(Identifiers.SpaceIdentifierEnum.ExternalId, id));
    }
    /**
    * Gets query using codename
    * @param codename Codename of space
    */
    bySpaceCodename(codename) {
        return this.buildResult(this.config, this.queryService, new Identifiers.SpaceIdentifier(Identifiers.SpaceIdentifierEnum.Codename, codename));
    }
}
//# sourceMappingURL=space-identifier-query.class.js.map