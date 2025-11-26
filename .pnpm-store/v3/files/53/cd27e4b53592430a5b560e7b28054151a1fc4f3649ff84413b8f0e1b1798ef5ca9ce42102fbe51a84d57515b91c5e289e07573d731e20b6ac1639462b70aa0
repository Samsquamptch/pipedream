"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollectionIdentifierQuery = void 0;
const models_1 = require("../models");
class CollectionIdentifierQuery {
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
        return this.buildResult(this.config, this.queryService, new models_1.Identifiers.CollectionIdentifier(models_1.Identifiers.CollectionIdentifierEnum.InternalId, id));
    }
    /**
    * Gets query using external Id
    * @param id External Id of collection
    */
    byCollectionExternalId(id) {
        return this.buildResult(this.config, this.queryService, new models_1.Identifiers.CollectionIdentifier(models_1.Identifiers.CollectionIdentifierEnum.ExternalId, id));
    }
    /**
    * Gets query using codename
    * @param codename Codename of collection
    */
    byCollectionCodename(codename) {
        return this.buildResult(this.config, this.queryService, new models_1.Identifiers.CollectionIdentifier(models_1.Identifiers.CollectionIdentifierEnum.Codename, codename));
    }
}
exports.CollectionIdentifierQuery = CollectionIdentifierQuery;
//# sourceMappingURL=collection-identifier-query.class.js.map