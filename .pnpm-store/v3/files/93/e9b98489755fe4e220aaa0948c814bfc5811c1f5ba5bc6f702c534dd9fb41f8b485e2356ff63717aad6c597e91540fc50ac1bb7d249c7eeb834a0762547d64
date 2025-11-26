"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpaceIdentifierQuery = void 0;
const models_1 = require("../models");
class SpaceIdentifierQuery {
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
        return this.buildResult(this.config, this.queryService, new models_1.Identifiers.SpaceIdentifier(models_1.Identifiers.SpaceIdentifierEnum.InternalId, id));
    }
    /**
    * Gets query using external Id
    * @param id External Id of space
    */
    bySpaceExternalId(id) {
        return this.buildResult(this.config, this.queryService, new models_1.Identifiers.SpaceIdentifier(models_1.Identifiers.SpaceIdentifierEnum.ExternalId, id));
    }
    /**
    * Gets query using codename
    * @param codename Codename of space
    */
    bySpaceCodename(codename) {
        return this.buildResult(this.config, this.queryService, new models_1.Identifiers.SpaceIdentifier(models_1.Identifiers.SpaceIdentifierEnum.Codename, codename));
    }
}
exports.SpaceIdentifierQuery = SpaceIdentifierQuery;
//# sourceMappingURL=space-identifier-query.class.js.map