"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserIdentifierQuery = void 0;
const models_1 = require("../models");
class UserIdentifierQuery {
    constructor(config, queryService, buildResult) {
        this.config = config;
        this.queryService = queryService;
        this.buildResult = buildResult;
    }
    /**
     * Gets using email
     * @param email Email
     */
    byEmail(email) {
        return this.buildResult(this.config, this.queryService, new models_1.Identifiers.UserIdentifier(models_1.Identifiers.UserIdentifierEnum.Email, email));
    }
    /**
     * Gets using internal Id
     * @param id Internal Id
     */
    byId(id) {
        return this.buildResult(this.config, this.queryService, new models_1.Identifiers.UserIdentifier(models_1.Identifiers.UserIdentifierEnum.Id, id));
    }
}
exports.UserIdentifierQuery = UserIdentifierQuery;
//# sourceMappingURL=user-identifier-query.class.js.map