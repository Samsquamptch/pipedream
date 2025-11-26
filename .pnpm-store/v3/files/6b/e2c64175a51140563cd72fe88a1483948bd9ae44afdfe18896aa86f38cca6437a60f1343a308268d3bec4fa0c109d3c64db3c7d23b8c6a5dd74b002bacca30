import { Identifiers } from '../models';
export class RoleIdentifierQuery {
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
        return this.buildResult(this.config, this.queryService, new Identifiers.RoleIdentifier(Identifiers.RoleIdentifierEnum.Id, id));
    }
    /**
     * Codename
     * @param codename Codename
     */
    byCodename(id) {
        return this.buildResult(this.config, this.queryService, new Identifiers.RoleIdentifier(Identifiers.RoleIdentifierEnum.Codename, id));
    }
}
//# sourceMappingURL=role-identifier-query.class.js.map