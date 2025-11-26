import { type RequestError } from 'got';
export interface TransloaditErrorResponseBody {
    error?: string;
    message?: string;
    reason?: string;
    assembly_ssl_url?: string;
    assembly_id?: string;
}
export declare class ApiError extends Error {
    name: string;
    code?: string;
    rawMessage?: string;
    reason?: string;
    assemblySslUrl?: string;
    assemblyId?: string;
    cause?: RequestError | undefined;
    constructor(params: {
        cause?: RequestError;
        body: TransloaditErrorResponseBody | undefined;
    });
}
//# sourceMappingURL=ApiError.d.ts.map