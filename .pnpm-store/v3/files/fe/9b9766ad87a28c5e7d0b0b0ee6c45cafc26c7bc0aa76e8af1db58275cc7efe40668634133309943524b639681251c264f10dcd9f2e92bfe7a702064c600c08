import { IParserResult, IAsyncParser, IAsyncParseResolvers } from '../parse-models';
import { IContentItem } from '../../models';
import { Elements } from '../../elements';
export declare class AsyncBrowserParser implements IAsyncParser<string> {
    parseAsync(html: string, mainRichTextElement: Elements.RichTextElement, resolvers: IAsyncParseResolvers, linkedItems: IContentItem[]): Promise<IParserResult<string>>;
    private parseInternalAsync;
    private processRichTextElementAsync;
    private createWrapperElement;
}
export declare const asyncBrowserParser: AsyncBrowserParser;
