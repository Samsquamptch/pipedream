import { Identifiers } from '../models';
export class TaskIdentifierQuery {
    constructor(config, queryService, buildResult) {
        this.config = config;
        this.queryService = queryService;
        this.buildResult = buildResult;
    }
    /**
     * Query by task Id
     * @param id Task id
     */
    byTaskId(id) {
        return this.buildResult(this.config, this.queryService, new Identifiers.TaskIdentifier(Identifiers.TaskIdentifierEnum.InternalId, id));
    }
}
//# sourceMappingURL=task-identifier-query.class.js.map