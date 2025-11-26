/**
 * Wraps a promise in a try-catch block and returns a tuple of [error, data]
 * where exactly one value is non-null
 *
 * @param promise The promise to execute safely
 * @returns A tuple of [error, data] where one is null
 */
export async function tryCatch(promise) {
    try {
        const data = await promise;
        return [null, data];
    }
    catch (error) {
        return [error, null];
    }
}
//# sourceMappingURL=tryCatch.js.map