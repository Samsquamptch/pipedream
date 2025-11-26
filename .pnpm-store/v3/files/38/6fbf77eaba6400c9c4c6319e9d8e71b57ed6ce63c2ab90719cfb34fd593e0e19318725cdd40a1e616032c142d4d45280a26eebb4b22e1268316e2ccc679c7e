export class DataQueryOptional {
    constructor(config, queryService, buildResult) {
        this.config = config;
        this.queryService = queryService;
        this.buildResult = buildResult;
    }
    /**
     * Gets query without data
     */
    withoutData() {
        return this.buildResult(this.config, this.queryService, undefined);
    }
    /**
     * Gets query with data
     * @param data Data for query
     */
    withData(data) {
        return this.buildResult(this.config, this.queryService, data);
    }
}
//# sourceMappingURL=data-query-optional.class.js.map