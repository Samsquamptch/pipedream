import { Identifiers } from '../models';
export class WorkflowIdentifierQuery {
    constructor(config, queryService, buildResult) {
        this.config = config;
        this.queryService = queryService;
        this.buildResult = buildResult;
    }
    /**
     * Id identifier
     * @param id If of the workflow
     */
    byWorkflowId(id) {
        return this.buildResult(this.config, this.queryService, new Identifiers.WorkflowIdentifier(Identifiers.WorkflowIdentifierEnum.Id, id));
    }
    /**
     * Codename identifier
     * @param codename codename of the workflow
     */
    byWorkflowCodename(codename) {
        return this.buildResult(this.config, this.queryService, new Identifiers.WorkflowIdentifier(Identifiers.WorkflowIdentifierEnum.Codename, codename));
    }
}
//# sourceMappingURL=workflow-identifier-query.class.js.map