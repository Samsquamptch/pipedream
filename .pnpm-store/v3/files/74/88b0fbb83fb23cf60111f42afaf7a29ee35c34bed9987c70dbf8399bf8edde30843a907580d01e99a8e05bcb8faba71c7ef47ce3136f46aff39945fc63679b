"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleIdentifierQuery = void 0;
const models_1 = require("../models");
class RoleIdentifierQuery {
    constructor(config, queryService, buildResult) {
        this.config = config;
        this.queryService = queryService;
        this.buildResult = buildResult;
    }
    /**
     * Id
     * @param id Internal Id
     */
    byId(id) {
        return this.buildResult(this.config, this.queryService, new models_1.Identifiers.RoleIdentifier(models_1.Identifiers.RoleIdentifierEnum.Id, id));
    }
    /**
     * Codename
     * @param codename Codename
     */
    byCodename(id) {
        return this.buildResult(this.config, this.queryService, new models_1.Identifiers.RoleIdentifier(models_1.Identifiers.RoleIdentifierEnum.Codename, id));
    }
}
exports.RoleIdentifierQuery = RoleIdentifierQuery;
//# sourceMappingURL=role-identifier-query.class.js.map