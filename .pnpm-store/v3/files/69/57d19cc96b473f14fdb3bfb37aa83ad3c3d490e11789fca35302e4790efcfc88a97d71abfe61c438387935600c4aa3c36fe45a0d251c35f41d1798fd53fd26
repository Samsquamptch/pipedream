"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnvironmentIdentifierQuery = void 0;
const identifiers_1 = require("../models/identifiers");
class EnvironmentIdentifierQuery {
    constructor(config, queryService, buildResult) {
        this.config = config;
        this.queryService = queryService;
        this.buildResult = buildResult;
    }
    /**
     * For given environment by id
     * @param environmentId EnvironmentId
     */
    environmentId(environmentId) {
        return this.buildResult(this.config, this.queryService, new identifiers_1.Identifiers.EnvironmentIdentifier(identifiers_1.Identifiers.EnvironmentIdentifierEnum.Id, environmentId));
    }
}
exports.EnvironmentIdentifierQuery = EnvironmentIdentifierQuery;
//# sourceMappingURL=environment-identifier-query.class.js.map