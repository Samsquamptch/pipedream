var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import axios from 'axios';
import * as HttpFunctions from './http.functions';
export class HttpService {
    constructor(opts) {
        this.opts = opts;
        this.axiosInstance = axios.create(opts === null || opts === void 0 ? void 0 : opts.axiosRequestConfig);
        this.functionsConfig = this.getFunctionsConfig();
    }
    getAsync(call, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield HttpFunctions.getWithRetryAsync(this.axiosInstance, call, this.functionsConfig, options);
        });
    }
    postAsync(call, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield HttpFunctions.postWithRetryAsync(this.axiosInstance, call, this.functionsConfig, options);
        });
    }
    putAsync(call, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield HttpFunctions.putWithRetryAsync(this.axiosInstance, call, this.functionsConfig, options);
        });
    }
    patchAsync(call, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield HttpFunctions.patchWithRetryAsync(this.axiosInstance, call, this.functionsConfig, options);
        });
    }
    deleteAsync(call, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield HttpFunctions.deleteWithRetryAsync(this.axiosInstance, call, this.functionsConfig, options);
        });
    }
    createCancelToken() {
        return HttpFunctions.createCancelToken();
    }
    getFunctionsConfig() {
        var _a, _b;
        return {
            logErrorsToConsole: (_b = (_a = this.opts) === null || _a === void 0 ? void 0 : _a.logErrorsToConsole) !== null && _b !== void 0 ? _b : true
        };
    }
}
//# sourceMappingURL=http.service.js.map