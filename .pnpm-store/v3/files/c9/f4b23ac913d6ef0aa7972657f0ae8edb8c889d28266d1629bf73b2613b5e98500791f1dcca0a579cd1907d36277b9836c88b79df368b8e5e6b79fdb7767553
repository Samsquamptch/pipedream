import { IParser } from '../../../parser';
import { IRichTextResolver } from '../rich-text-resolver.models';
export declare abstract class BaseRichTextResolver<TInput, TOutput> implements IRichTextResolver<TInput, TOutput> {
    private defaultParser;
    private parser?;
    constructor(defaultParser: IParser<any>, parser?: IParser<any> | undefined);
    abstract resolveRichText(input: TInput): TOutput;
    protected getParser(): IParser<any>;
}
