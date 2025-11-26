"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.headerHelper = exports.HeaderHelper = void 0;
class HeaderHelper {
    constructor() {
        /**
        * Header name for SDK usage
        */
        this.sdkVersionHeader = 'X-KC-SDKID';
    }
    /**
    * Header identifying SDK type & version for internal purposes of Kontent.ai
    */
    getSdkIdHeader(info) {
        return {
            header: this.sdkVersionHeader,
            value: `${info.host};${info.name};${info.version}`
        };
    }
}
exports.HeaderHelper = HeaderHelper;
exports.headerHelper = new HeaderHelper();
//# sourceMappingURL=header.helper.js.map