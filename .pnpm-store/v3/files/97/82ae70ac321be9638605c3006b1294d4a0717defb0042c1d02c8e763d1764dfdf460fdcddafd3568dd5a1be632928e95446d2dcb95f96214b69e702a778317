"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhookIdentifierQuery = void 0;
const models_1 = require("../models");
class WebhookIdentifierQuery {
    constructor(config, queryService, buildResult) {
        this.config = config;
        this.queryService = queryService;
        this.buildResult = buildResult;
    }
    /**
     * Id identifier
     * @param id Id of the webhook
     */
    byId(id) {
        return this.buildResult(this.config, this.queryService, new models_1.Identifiers.WebhookIdentifier(models_1.Identifiers.WebhookIdentifierEnum.Id, id));
    }
}
exports.WebhookIdentifierQuery = WebhookIdentifierQuery;
//# sourceMappingURL=webhook-identifier-query.class.js.map