"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deliveryUrlHelper = exports.DeliveryUrlHelper = void 0;
const urlParse = require("url-parse");
class DeliveryUrlHelper {
    replaceAssetDomain(originalAssetUrl, customDomain) {
        const urlPath = this.getUrlPathname(originalAssetUrl);
        return `${customDomain}${urlPath}`;
    }
    getUrlPathname(url) {
        const parsedUrl = urlParse(url);
        return parsedUrl.pathname;
    }
}
exports.DeliveryUrlHelper = DeliveryUrlHelper;
exports.deliveryUrlHelper = new DeliveryUrlHelper();
//# sourceMappingURL=delivery-url.helper.js.map