import { IResolvedRichTextHtmlResult, IAsyncRichTextHtmlResolverInput } from '../rich-text-resolver.models';
import { IAsyncParser } from '../../../parser';
import { BaseAsyncRichTextResolver } from '../base/base-async-rich-text-resolver';
export declare class AsyncRichTextHtmlResolver extends BaseAsyncRichTextResolver<IAsyncRichTextHtmlResolverInput, IResolvedRichTextHtmlResult> {
    constructor(parser?: IAsyncParser<string>);
    resolveRichTextAsync(input: IAsyncRichTextHtmlResolverInput): Promise<IResolvedRichTextHtmlResult>;
    private resolveRichTextInternalAsync;
}
export declare const createAsyncRichTextHtmlResolver: (parser?: IAsyncParser<string>) => AsyncRichTextHtmlResolver;
