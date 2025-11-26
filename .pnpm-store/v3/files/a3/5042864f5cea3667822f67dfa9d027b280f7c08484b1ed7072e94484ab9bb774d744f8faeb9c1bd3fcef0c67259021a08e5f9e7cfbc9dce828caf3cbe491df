"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskIdentifierQuery = void 0;
const models_1 = require("../models");
class TaskIdentifierQuery {
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
        return this.buildResult(this.config, this.queryService, new models_1.Identifiers.TaskIdentifier(models_1.Identifiers.TaskIdentifierEnum.InternalId, id));
    }
}
exports.TaskIdentifierQuery = TaskIdentifierQuery;
//# sourceMappingURL=task-identifier-query.class.js.map