import { Identifiers } from '../models';
export class RenditionIdentifierQuery {
    constructor(config, queryService, buildResult) {
        this.config = config;
        this.queryService = queryService;
        this.buildResult = buildResult;
    }
    /**
    * Gets using internal Id
    * @param id Internal Id of content item
    */
    byRenditionId(id) {
        return this.buildResult(this.config, this.queryService, new Identifiers.RenditionIdentifier(Identifiers.RenditionIdentifierEnum.InternalId, id));
    }
    /**
    * Gets query using external Id
    * @param id External Id of content item
    */
    byRenditionExternalId(id) {
        return this.buildResult(this.config, this.queryService, new Identifiers.RenditionIdentifier(Identifiers.RenditionIdentifierEnum.ExternalId, id));
    }
}
//# sourceMappingURL=rendition-identifier-query.class.js.map