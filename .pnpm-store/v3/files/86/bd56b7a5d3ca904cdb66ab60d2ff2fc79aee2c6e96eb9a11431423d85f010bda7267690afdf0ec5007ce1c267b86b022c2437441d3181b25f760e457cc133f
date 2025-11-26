import type { z } from 'zod';
export type ZodIssueWithContext = z.ZodIssue & {
    parentObj: unknown;
    humanReadable: string;
};
export type ZodParseWithContextResult<T extends z.ZodType> = {
    errors: ZodIssueWithContext[];
    humanReadable: string;
} & ({
    success: true;
    safe: z.infer<T>;
} | {
    success: false;
    safe?: never;
});
export declare function zodParseWithContext<T extends z.ZodType>(schema: T, obj: unknown): ZodParseWithContextResult<T>;
//# sourceMappingURL=zodParseWithContext.d.ts.map