import { browserParser } from '../../../parser';
import { guidHelper } from '../../../utilities';
import { BaseRichTextResolver } from '../base/base-rich-text-resolver';
export class RichTextObjectResolver extends BaseRichTextResolver {
    constructor(parser) {
        super(browserParser, parser);
        this.sdkIdAttributeName = 'sdk-elem-id';
        this.rootId = 'root';
        this.defaultWrapTag = 'div';
    }
    resolveRichText(input) {
        var _a;
        const result = this.resolveRichTextInternal(input.element.value, input, {
            type: 'root',
            attributes: [],
            children: [],
            data: {},
            tag: (_a = input.wrapperTag) !== null && _a !== void 0 ? _a : this.defaultWrapTag,
            _sdkElemId: this.rootId
        });
        if (input.cleanSdkIds === true) {
            this.cleanSdkIds(result);
        }
        return {
            data: result
        };
    }
    resolveRichTextInternal(html, input, result) {
        var _a;
        super.getParser().parse(html, input.element, {
            elementResolver: (element) => {
                // generate guid for each element
                element.setAttribute(this.sdkIdAttributeName, guidHelper.genereateGuid());
            },
            contentItemResolver: (element, itemCodename, linkedItemIndex, linkedItem) => {
                const data = {
                    codename: itemCodename,
                    item: linkedItem
                };
                const parentSdkId = this.getSdkIdFromElement(element.parentElement);
                const parentItem = this.findItemWithSdkId(parentSdkId, result);
                if (parentItem) {
                    parentItem.children.push({
                        type: 'linkedItem',
                        attributes: this.getAttributes(element),
                        tag: element.tag.toLowerCase(),
                        data: data,
                        children: [],
                        _sdkElemId: this.getSdkIdFromElement(element)
                    });
                }
            },
            genericElementResolver: (element) => {
                var _a, _b;
                const data = {
                    text: (_a = element.text) !== null && _a !== void 0 ? _a : '',
                    html: (_b = element.html) !== null && _b !== void 0 ? _b : ''
                };
                const parentSdkId = this.getSdkIdFromElement(element.parentElement);
                const parentItem = this.findItemWithSdkId(parentSdkId, result);
                if (parentItem) {
                    parentItem.children.push({
                        type: 'htmlElement',
                        attributes: this.getAttributes(element),
                        tag: element.tag.toLowerCase(),
                        data: data,
                        children: [],
                        _sdkElemId: this.getSdkIdFromElement(element)
                    });
                }
            },
            imageResolver: (element, imageId, image) => {
                const data = {
                    imageId: imageId,
                    image: image
                };
                const parentSdkId = this.getSdkIdFromElement(element.parentElement);
                const parentItem = this.findItemWithSdkId(parentSdkId, result);
                if (parentItem) {
                    parentItem.children.push({
                        type: 'image',
                        attributes: this.getAttributes(element),
                        tag: element.tag.toLowerCase(),
                        data: data,
                        children: [],
                        _sdkElemId: this.getSdkIdFromElement(element)
                    });
                }
            },
            urlResolver: (element, linkId, linkText, link) => {
                const data = {
                    linkId: linkId,
                    linkText: linkText,
                    link: link
                };
                const parentSdkId = this.getSdkIdFromElement(element.parentElement);
                const parentItem = this.findItemWithSdkId(parentSdkId, result);
                if (parentItem) {
                    parentItem.children.push({
                        type: 'link',
                        attributes: this.getAttributes(element),
                        tag: element.tag.toLowerCase(),
                        data: data,
                        children: [],
                        _sdkElemId: this.getSdkIdFromElement(element)
                    });
                }
            }
        }, (_a = input.linkedItems) !== null && _a !== void 0 ? _a : []);
        return result;
    }
    findItemWithSdkId(sdkId, item) {
        if (item._sdkElemId === sdkId) {
            return item;
        }
        for (const child of item.children) {
            const foundItem = this.findItemWithSdkId(sdkId, child);
            if (foundItem) {
                return foundItem;
            }
        }
        return undefined;
    }
    getAttributes(element) {
        var _a;
        return (_a = element === null || element === void 0 ? void 0 : element.attributes) !== null && _a !== void 0 ? _a : [];
    }
    getSdkIdFromElement(element) {
        var _a, _b;
        if (!element) {
            return this.rootId;
        }
        const value = (_b = (_a = element.attributes.find((m) => m.name === this.sdkIdAttributeName)) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : this.rootId;
        return value;
    }
    cleanSdkIds(item) {
        item.attributes = item.attributes.filter((m) => m.name !== this.sdkIdAttributeName);
        item._sdkElemId = '';
        for (const child of item.children) {
            this.cleanSdkIds(child);
        }
    }
}
export const createRichTextObjectResolver = (parser) => new RichTextObjectResolver(parser);
//# sourceMappingURL=rich-text-object-resolver.js.map