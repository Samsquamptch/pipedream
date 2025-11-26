export class HeaderHelper {
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
export const headerHelper = new HeaderHelper();
//# sourceMappingURL=header.helper.js.map