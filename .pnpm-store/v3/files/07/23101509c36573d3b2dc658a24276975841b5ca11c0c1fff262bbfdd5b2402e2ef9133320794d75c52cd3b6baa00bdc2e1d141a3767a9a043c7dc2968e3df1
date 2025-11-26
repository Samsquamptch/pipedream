import { Identifiers } from '../models';
export class UserIdentifierQuery {
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
        return this.buildResult(this.config, this.queryService, new Identifiers.UserIdentifier(Identifiers.UserIdentifierEnum.Email, email));
    }
    /**
     * Gets using internal Id
     * @param id Internal Id
     */
    byId(id) {
        return this.buildResult(this.config, this.queryService, new Identifiers.UserIdentifier(Identifiers.UserIdentifierEnum.Id, id));
    }
}
//# sourceMappingURL=user-identifier-query.class.js.map