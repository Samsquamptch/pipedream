import { browserParser, parserConfiguration, parserHelper } from '../../../parser';
import { BaseRichTextResolver } from '../base/base-rich-text-resolver';
export class RichTextHtmlResolver extends BaseRichTextResolver {
    constructor(parser) {
        super(browserParser, parser);
    }
    resolveRichText(input) {
        return this.resolveRichTextInternal(input.element.value, input);
    }
    resolveRichTextInternal(html, input) {
        var _a;
        const parsedResult = super.getParser().parse(html, input.element, {
            elementResolver: (element) => { },
            contentItemResolver: (element, itemCodename, linkedItemIndex, linkedItem) => {
                var _a;
                const parentElement = element.parentElement;
                if (parentElement) {
                    const resolvedItemHtml = input.contentItemResolver
                        ? (_a = input.contentItemResolver(itemCodename, linkedItem).contentItemHtml) !== null && _a !== void 0 ? _a : ''
                        : '';
                    // resursively resolve HTML
                    const innerHtml = this.resolveRichTextInternal(resolvedItemHtml, input).html;
                    // set resolved html
                    if (input.preserveResolvedObjectTags === true) {
                        element.setInnerHtml(innerHtml);
                    }
                    else {
                        element.setOuterHtml(innerHtml);
                    }
                    // set resolved attribute
                    element.setAttribute(parserHelper.sdkResolvedAttributeName, '1');
                }
            },
            genericElementResolver: (element) => {
                // do nothing to generic elements
            },
            imageResolver: (element, imageId, image) => {
                // get image result
                const imageResult = input.imageResolver ? input.imageResolver(imageId, image) : undefined;
                // html has priority over url resolver
                if (imageResult === null || imageResult === void 0 ? void 0 : imageResult.imageHtml) {
                    // replace link html
                    element.setOuterHtml(imageResult.imageHtml);
                }
                else if (imageResult === null || imageResult === void 0 ? void 0 : imageResult.imageUrl) {
                    // set link url only
                    element.setAttribute(parserConfiguration.imageElementData.srcAttribute, imageResult.imageUrl);
                }
            },
            urlResolver: (element, linkId, linkText, link) => {
                if (input.urlResolver) {
                    const urlResult = input.urlResolver(linkId, linkText, link);
                    // html has priority over url resolver
                    if (urlResult === null || urlResult === void 0 ? void 0 : urlResult.linkHtml) {
                        // replace link html
                        element.setOuterHtml(urlResult.linkHtml);
                    }
                    else if (urlResult === null || urlResult === void 0 ? void 0 : urlResult.linkUrl) {
                        // set link url only
                        element.setAttribute('href', urlResult.linkUrl);
                    }
                }
            }
        }, (_a = input.linkedItems) !== null && _a !== void 0 ? _a : []);
        return {
            componentCodenames: parsedResult.componentCodenames,
            linkedItemCodenames: parsedResult.linkedItemCodenames,
            html: parsedResult.result
        };
    }
}
export const createRichTextHtmlResolver = (parser) => new RichTextHtmlResolver(parser);
//# sourceMappingURL=rich-text-html-resolver.js.map