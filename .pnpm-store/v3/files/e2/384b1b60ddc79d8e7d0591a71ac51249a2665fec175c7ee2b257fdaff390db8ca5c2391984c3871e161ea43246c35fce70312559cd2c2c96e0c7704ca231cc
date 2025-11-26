import { Identifiers } from '../models';
export class WorkflowStepIdentifierQuery {
    constructor(config, queryService, buildResult) {
        this.config = config;
        this.queryService = queryService;
        this.buildResult = buildResult;
    }
    /**
     * Id identifier
     * @param id If of the workflow step
     */
    byWorkflowStepId(id) {
        return this.buildResult(this.config, this.queryService, new Identifiers.WorkflowIdentifier(Identifiers.WorkflowIdentifierEnum.Id, id));
    }
    /**
     * Codename identifier
     * @param codename codename of the workflow step
     */
    byWorkflowStepCodename(codename) {
        return this.buildResult(this.config, this.queryService, new Identifiers.WorkflowIdentifier(Identifiers.WorkflowIdentifierEnum.Codename, codename));
    }
}
//# sourceMappingURL=workflow-step-identifier-query.class.js.map