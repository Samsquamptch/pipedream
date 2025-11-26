import { IParser, IParseResolvers, IParserResult } from '../parse-models';
import { IContentItem } from '../../models';
import { Elements } from '../../elements';
export declare class BrowserParser implements IParser<string> {
    parse(html: string, mainRichTextElement: Elements.RichTextElement, resolvers: IParseResolvers, linkedItems: IContentItem[]): IParserResult<string>;
    private parseInternal;
    private processRichTextElement;
    private createWrapperElement;
}
export declare const browserParser: BrowserParser;
