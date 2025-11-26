"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAsyncRichTextHtmlResolver = exports.AsyncRichTextHtmlResolver = void 0;
const parser_1 = require("../../../parser");
const base_async_rich_text_resolver_1 = require("../base/base-async-rich-text-resolver");
class AsyncRichTextHtmlResolver extends base_async_rich_text_resolver_1.BaseAsyncRichTextResolver {
    constructor(parser) {
        super(parser_1.asyncBrowserParser, parser);
    }
    resolveRichTextAsync(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.resolveRichTextInternalAsync(input.element.value, input);
        });
    }
    resolveRichTextInternalAsync(html, input) {
        const _super = Object.create(null, {
            getAsyncParser: { get: () => super.getAsyncParser }
        });
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const parsedResult = yield _super.getAsyncParser.call(this).parseAsync(html, input.element, {
                elementResolverAsync: (element) => __awaiter(this, void 0, void 0, function* () { }),
                contentItemResolverAsync: (element, itemCodename, linkedItemIndex, linkedItem) => __awaiter(this, void 0, void 0, function* () {
                    var _b;
                    const parentElement = element.parentElement;
                    if (parentElement) {
                        const resolvedItemHtml = input.contentItemResolverAsync
                            ? (_b = (yield input.contentItemResolverAsync(itemCodename, linkedItem)).contentItemHtml) !== null && _b !== void 0 ? _b : ''
                            : '';
                        // resursively resolve HTML
                        const innerHtml = (yield this.resolveRichTextInternalAsync(resolvedItemHtml, input)).html;
                        // set resolved html
                        if (input.preserveResolvedObjectTags === true) {
                            element.setInnerHtml(innerHtml);
                        }
                        else {
                            element.setOuterHtml(innerHtml);
                        }
                        // set resolved attribute
                        element.setAttribute(parser_1.parserHelper.sdkResolvedAttributeName, '1');
                    }
                }),
                genericElementResolverAsync: (element) => __awaiter(this, void 0, void 0, function* () {
                    // do nothing to generic elements
                }),
                imageResolverAsync: (element, imageId, image) => __awaiter(this, void 0, void 0, function* () {
                    // get image result
                    const imageResult = input.imageResolverAsync
                        ? yield input.imageResolverAsync(imageId, image)
                        : undefined;
                    // html has priority over url resolver
                    if (imageResult === null || imageResult === void 0 ? void 0 : imageResult.imageHtml) {
                        // replace link html
                        element.setOuterHtml(imageResult.imageHtml);
                    }
                    else if (imageResult === null || imageResult === void 0 ? void 0 : imageResult.imageUrl) {
                        // set link url only
                        element.setAttribute(parser_1.parserConfiguration.imageElementData.srcAttribute, imageResult.imageUrl);
                    }
                }),
                urlResolverAsync: (element, linkId, linkText, link) => __awaiter(this, void 0, void 0, function* () {
                    if (input.urlResolverAsync) {
                        const urlResult = yield input.urlResolverAsync(linkId, linkText, link);
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
                })
            }, (_a = input.linkedItems) !== null && _a !== void 0 ? _a : []);
            return {
                componentCodenames: parsedResult.componentCodenames,
                linkedItemCodenames: parsedResult.linkedItemCodenames,
                html: parsedResult.result
            };
        });
    }
}
exports.AsyncRichTextHtmlResolver = AsyncRichTextHtmlResolver;
const createAsyncRichTextHtmlResolver = (parser) => new AsyncRichTextHtmlResolver(parser);
exports.createAsyncRichTextHtmlResolver = createAsyncRichTextHtmlResolver;
//# sourceMappingURL=async-rich-text-html-resolver.js.map