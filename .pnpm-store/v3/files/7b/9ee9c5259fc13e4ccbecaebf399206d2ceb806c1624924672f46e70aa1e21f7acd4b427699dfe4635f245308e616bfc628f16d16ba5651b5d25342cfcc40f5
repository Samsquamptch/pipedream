"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRichTextJsonResolver = exports.RichTextJsonResolver = void 0;
const parser_1 = require("../../../parser");
const base_rich_text_resolver_1 = require("../base/base-rich-text-resolver");
const rich_text_object_resolver_1 = require("./rich-text-object-resolver");
class RichTextJsonResolver extends base_rich_text_resolver_1.BaseRichTextResolver {
    constructor(parser) {
        super(parser_1.browserParser, parser);
    }
    resolveRichText(input) {
        const objectResult = (0, rich_text_object_resolver_1.createRichTextObjectResolver)(this.getParser()).resolveRichText(input).data;
        return {
            json: JSON.stringify(objectResult)
        };
    }
}
exports.RichTextJsonResolver = RichTextJsonResolver;
const createRichTextJsonResolver = (parser) => new RichTextJsonResolver(parser);
exports.createRichTextJsonResolver = createRichTextJsonResolver;
//# sourceMappingURL=rich-text-json-resolver.js.map