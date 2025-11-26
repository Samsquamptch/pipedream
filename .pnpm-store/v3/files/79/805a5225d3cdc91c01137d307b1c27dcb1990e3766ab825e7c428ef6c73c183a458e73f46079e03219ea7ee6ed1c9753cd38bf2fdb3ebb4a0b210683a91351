import { browserParser } from '../../../parser';
import { BaseRichTextResolver } from '../base/base-rich-text-resolver';
import { createRichTextObjectResolver } from './rich-text-object-resolver';
export class RichTextJsonResolver extends BaseRichTextResolver {
    constructor(parser) {
        super(browserParser, parser);
    }
    resolveRichText(input) {
        const objectResult = createRichTextObjectResolver(this.getParser()).resolveRichText(input).data;
        return {
            json: JSON.stringify(objectResult)
        };
    }
}
export const createRichTextJsonResolver = (parser) => new RichTextJsonResolver(parser);
//# sourceMappingURL=rich-text-json-resolver.js.map