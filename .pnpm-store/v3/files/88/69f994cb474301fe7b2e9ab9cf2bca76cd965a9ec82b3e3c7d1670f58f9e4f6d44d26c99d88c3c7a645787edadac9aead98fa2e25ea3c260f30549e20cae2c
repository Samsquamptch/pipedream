"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkflowIdentifierQuery = void 0;
const models_1 = require("../models");
class WorkflowIdentifierQuery {
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
        return this.buildResult(this.config, this.queryService, new models_1.Identifiers.WorkflowIdentifier(models_1.Identifiers.WorkflowIdentifierEnum.Id, id));
    }
    /**
     * Codename identifier
     * @param codename codename of the workflow
     */
    byWorkflowCodename(codename) {
        return this.buildResult(this.config, this.queryService, new models_1.Identifiers.WorkflowIdentifier(models_1.Identifiers.WorkflowIdentifierEnum.Codename, codename));
    }
}
exports.WorkflowIdentifierQuery = WorkflowIdentifierQuery;
//# sourceMappingURL=workflow-identifier-query.class.js.map