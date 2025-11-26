export class TestHttpService {
    constructor(config) {
        this.response = undefined;
        this.error = undefined;
        Object.assign(this, config);
    }
    getAsync(call, options) {
        return this.resolveTestCall();
    }
    postAsync(call, options) {
        return this.resolveTestCall();
    }
    putAsync(call, options) {
        return this.resolveTestCall();
    }
    patchAsync(call, options) {
        return this.resolveTestCall();
    }
    deleteAsync(call, options) {
        return this.resolveTestCall();
    }
    createCancelToken() {
        return {
            cancel: () => { },
            token: undefined
        };
    }
    resolveTestCall() {
        const promise = new Promise((resolve, reject) => {
            if (this.response) {
                resolve(this.response);
            }
            if (this.error) {
                reject(this.error);
            }
            throw Error(`Missing test data`);
        });
        return promise;
    }
}
//# sourceMappingURL=test-http.service.js.map