import { IResolvedRichTextHtmlResult, IRichTextHtmlResolverInput } from '../rich-text-resolver.models';
import { IParser } from '../../../parser';
import { BaseRichTextResolver } from '../base/base-rich-text-resolver';
export declare class RichTextHtmlResolver extends BaseRichTextResolver<IRichTextHtmlResolverInput, IResolvedRichTextHtmlResult> {
    constructor(parser?: IParser<string>);
    resolveRichText(input: IRichTextHtmlResolverInput): IResolvedRichTextHtmlResult;
    private resolveRichTextInternal;
}
export declare const createRichTextHtmlResolver: (parser?: IParser<string>) => RichTextHtmlResolver;
