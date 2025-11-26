import { HTTPError } from 'got';
export class ApiError extends Error {
    name = 'ApiError';
    // there might not be an error code (or message) if the server didn't respond with any JSON response at all
    // e.g. if there was a 500 in the HTTP reverse proxy
    code;
    rawMessage;
    reason;
    assemblySslUrl;
    assemblyId;
    cause;
    constructor(params) {
        const { cause, body = {} } = params;
        const parts = ['API error'];
        if (cause instanceof HTTPError && cause?.response.statusCode)
            parts.push(`(HTTP ${cause.response.statusCode})`);
        if (body.error)
            parts.push(`${body.error}:`);
        if (body.message)
            parts.push(body.message);
        if (body.assembly_ssl_url)
            parts.push(body.assembly_ssl_url);
        const message = parts.join(' ');
        super(message);
        this.rawMessage = body.message;
        this.reason = body.reason;
        this.assemblyId = body.assembly_id;
        this.assemblySslUrl = body.assembly_ssl_url;
        this.code = body.error;
        this.cause = cause;
    }
}
//# sourceMappingURL=ApiError.js.map