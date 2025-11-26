import { Identifiers } from '../models/identifiers';
export class EnvironmentIdentifierQuery {
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
        return this.buildResult(this.config, this.queryService, new Identifiers.EnvironmentIdentifier(Identifiers.EnvironmentIdentifierEnum.Id, environmentId));
    }
}
//# sourceMappingURL=environment-identifier-query.class.js.map