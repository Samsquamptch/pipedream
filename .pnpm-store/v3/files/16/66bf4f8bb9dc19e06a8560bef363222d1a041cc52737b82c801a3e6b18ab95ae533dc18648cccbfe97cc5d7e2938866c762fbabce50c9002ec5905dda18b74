import { Identifiers } from '../models';
export class ContentItemExternalIdIdentifierQuery {
    constructor(config, queryService, buildResult) {
        this.config = config;
        this.queryService = queryService;
        this.buildResult = buildResult;
    }
    byItemExternalId(externalId) {
        return this.buildResult(this.config, this.queryService, new Identifiers.ContentItemIdentifier(Identifiers.ContentItemIdentifierEnum.ExternalId, externalId));
    }
}
//# sourceMappingURL=content-item-external-id-identifier.class.js.map