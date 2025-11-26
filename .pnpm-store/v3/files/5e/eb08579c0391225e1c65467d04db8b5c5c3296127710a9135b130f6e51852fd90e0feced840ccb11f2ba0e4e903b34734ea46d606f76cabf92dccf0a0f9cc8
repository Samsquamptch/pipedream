import { Identifiers } from '../models';
export class WebhookIdentifierQuery {
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
        return this.buildResult(this.config, this.queryService, new Identifiers.WebhookIdentifier(Identifiers.WebhookIdentifierEnum.Id, id));
    }
}
//# sourceMappingURL=webhook-identifier-query.class.js.map