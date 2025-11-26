import * as urlParse from 'url-parse';
export class DeliveryUrlHelper {
    replaceAssetDomain(originalAssetUrl, customDomain) {
        const urlPath = this.getUrlPathname(originalAssetUrl);
        return `${customDomain}${urlPath}`;
    }
    getUrlPathname(url) {
        const parsedUrl = urlParse(url);
        return parsedUrl.pathname;
    }
}
export const deliveryUrlHelper = new DeliveryUrlHelper();
//# sourceMappingURL=delivery-url.helper.js.map