"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.urlHelper = exports.UrlHelper = void 0;
class UrlHelper {
    /**
   * Adds query parameters to given url
   * @param url Url to which options will be added
   * @param options Query parameters to add
   */
    addOptionsToUrl(url, options) {
        if (options) {
            options.forEach(filter => {
                if (url.indexOf('?') > -1) {
                    url += '&';
                }
                else {
                    url += '?';
                }
                url += filter.getParam();
            });
        }
        return url;
    }
}
exports.UrlHelper = UrlHelper;
exports.urlHelper = new UrlHelper();
//# sourceMappingURL=url.helper.js.map