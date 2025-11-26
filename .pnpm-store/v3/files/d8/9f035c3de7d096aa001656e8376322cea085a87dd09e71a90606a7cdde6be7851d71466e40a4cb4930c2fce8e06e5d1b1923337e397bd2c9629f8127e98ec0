import { Filters, Parameters } from '../../models';
export class BaseQuery {
    constructor(config, queryService) {
        this.config = config;
        this.queryService = queryService;
        this.parameters = [];
    }
    /**
     * Adds custom parameter to query
     * @param name Name of parameter
     * @param value Value of parameter
     */
    withCustomParameter(name, value) {
        this.parameters.push(new Parameters.QueryParameter(name, value));
        return this;
    }
    /**
     * Adds parameter to query
     * @param name Name of parameter
     * @param value Value of parameter
     */
    withParameter(parameter) {
        this.parameters.push(parameter);
        return this;
    }
    /**
     * Adds parameters to query
     * @param parameters Array of parameters
     */
    withParameters(parameters) {
        this.parameters.push(...parameters);
        return this;
    }
    /**
     * Gets headers used by this query
     */
    getHeaders() {
        return this.queryService.getHeaders(this._queryConfig, []);
    }
    /**
     * Sets request headers
     */
    withHeaders(headers) {
        var _a;
        const queryHeaders = (_a = this._queryConfig.customHeaders) !== null && _a !== void 0 ? _a : [];
        queryHeaders.push(...headers);
        this._queryConfig.customHeaders = queryHeaders;
        return this;
    }
    /**
     * Sets request header
     */
    withHeader(header) {
        var _a;
        const queryHeaders = (_a = this._queryConfig.customHeaders) !== null && _a !== void 0 ? _a : [];
        queryHeaders.push(header);
        this._queryConfig.customHeaders = queryHeaders;
        return this;
    }
    /**
     * Sets custom URL of request (overrides default URL of the query)
     */
    withCustomUrl(url) {
        this.customUrl = url;
        return this;
    }
    /**
     * Gets all query parameter currently applied to query
     */
    getParameters() {
        return this.parameters;
    }
    /**
     * Used to configure query
     * @param queryConfig Query configuration
     */
    queryConfig(queryConfig) {
        this._queryConfig = queryConfig;
        return this;
    }
    resolveUrlInternal(action) {
        var _a;
        // use custom URL if user specified it
        if (this.customUrl) {
            return this.customUrl;
        }
        // use original url
        return this.queryService.getUrl(action, (_a = this._queryConfig) !== null && _a !== void 0 ? _a : {}, this.getParameters());
    }
    processDefaultLanguageParameter() {
        // add default language if none is specified && default language is specified globally
        if (this.config.defaultLanguage) {
            const languageParameter = this.getParameters().find((m) => { var _a; return (_a = m.getParam()) === null || _a === void 0 ? void 0 : _a.toLowerCase().includes('language='.toLowerCase()); });
            if (!languageParameter) {
                // language parameter was not specified in query, use globally defined language
                this.parameters.push(new Parameters.LanguageParameter(this.config.defaultLanguage));
            }
        }
    }
    processExcludeArchivedItemsParameter() {
        if (this.config.excludeArchivedItems) {
            this.parameters.push(new Filters.NotEqualsFilter('system.workflow_step', 'archived'));
        }
    }
}
//# sourceMappingURL=base-query.class.js.map