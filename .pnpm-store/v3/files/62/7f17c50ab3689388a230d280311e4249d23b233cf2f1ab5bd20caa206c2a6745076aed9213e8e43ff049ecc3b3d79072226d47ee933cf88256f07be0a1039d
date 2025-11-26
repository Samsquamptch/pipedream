import { IAsyncParser } from '../../../parser';
import { IRichTextResolverAsync } from '../rich-text-resolver.models';
export declare abstract class BaseAsyncRichTextResolver<TInput, TOutput> implements IRichTextResolverAsync<TInput, TOutput> {
    private defaultParser;
    private parser?;
    constructor(defaultParser: IAsyncParser<any>, parser?: IAsyncParser<any> | undefined);
    abstract resolveRichTextAsync(input: TInput): Promise<TOutput>;
    protected getAsyncParser(): IAsyncParser<any>;
}
