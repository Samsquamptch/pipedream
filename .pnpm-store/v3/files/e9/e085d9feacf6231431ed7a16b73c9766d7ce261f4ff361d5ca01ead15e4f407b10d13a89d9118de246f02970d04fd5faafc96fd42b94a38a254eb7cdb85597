import z from 'zod';
export declare const assembliesGetSchema: z.ZodObject<{
    auth: z.ZodObject<{
        key: z.ZodString;
        secret: z.ZodOptional<z.ZodString>;
        expires: z.ZodOptional<z.ZodString>;
        max_size: z.ZodOptional<z.ZodNumber>;
        nonce: z.ZodOptional<z.ZodString>;
        referer: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        key: string;
        secret?: string | undefined;
        expires?: string | undefined;
        referer?: string | undefined;
        max_size?: number | undefined;
        nonce?: string | undefined;
    }, {
        key: string;
        secret?: string | undefined;
        expires?: string | undefined;
        referer?: string | undefined;
        max_size?: number | undefined;
        nonce?: string | undefined;
    }>;
    page: z.ZodDefault<z.ZodNumber>;
    pagesize: z.ZodDefault<z.ZodNumber>;
    type: z.ZodEnum<["all", "uploading", "executing", "canceled", "completed", "failed", "request_aborted"]>;
    fromdate: z.ZodString;
    todate: z.ZodDefault<z.ZodString>;
    keywords: z.ZodArray<z.ZodString, "many">;
}, "strict", z.ZodTypeAny, {
    auth: {
        key: string;
        secret?: string | undefined;
        expires?: string | undefined;
        referer?: string | undefined;
        max_size?: number | undefined;
        nonce?: string | undefined;
    };
    type: "all" | "uploading" | "executing" | "canceled" | "completed" | "failed" | "request_aborted";
    page: number;
    keywords: string[];
    pagesize: number;
    fromdate: string;
    todate: string;
}, {
    auth: {
        key: string;
        secret?: string | undefined;
        expires?: string | undefined;
        referer?: string | undefined;
        max_size?: number | undefined;
        nonce?: string | undefined;
    };
    type: "all" | "uploading" | "executing" | "canceled" | "completed" | "failed" | "request_aborted";
    keywords: string[];
    fromdate: string;
    page?: number | undefined;
    pagesize?: number | undefined;
    todate?: string | undefined;
}>;
//# sourceMappingURL=assembliesGet.d.ts.map