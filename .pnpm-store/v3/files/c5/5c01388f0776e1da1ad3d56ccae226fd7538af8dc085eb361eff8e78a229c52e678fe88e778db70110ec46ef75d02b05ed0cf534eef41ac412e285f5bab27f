import { Elements } from '../elements';
import { IContentItem, ILink, IRichTextImage } from '../models';
import { IParserElement } from './parse-models';
export declare class ParserHelper {
    readonly sdkResolvedAttributeName: string;
    getLinkedItem(linkedItems: IContentItem[], itemCodename: string): IContentItem | undefined;
    tryGetImage(inputElement: Elements.RichTextElement, linkedItems: IContentItem[], imageId: string): IRichTextImage | undefined;
    tryGetLink(inputElement: Elements.RichTextElement, linkedItems: IContentItem[], linkId: string): ILink | undefined;
    convertToParserElement(element: Element): IParserElement;
}
export declare const parserHelper: ParserHelper;
