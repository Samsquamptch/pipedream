import { IRichTextObjectResolverInput, IRichTextObjectResult } from '../rich-text-resolver.models';
import { IParser } from '../../../parser';
import { BaseRichTextResolver } from '../base/base-rich-text-resolver';
export declare class RichTextObjectResolver extends BaseRichTextResolver<IRichTextObjectResolverInput, IRichTextObjectResult> {
    private readonly sdkIdAttributeName;
    private readonly rootId;
    private readonly defaultWrapTag;
    constructor(parser?: IParser<string>);
    resolveRichText(input: IRichTextObjectResolverInput): IRichTextObjectResult;
    private resolveRichTextInternal;
    private findItemWithSdkId;
    private getAttributes;
    private getSdkIdFromElement;
    private cleanSdkIds;
}
export declare const createRichTextObjectResolver: (parser?: IParser<any>) => RichTextObjectResolver;
