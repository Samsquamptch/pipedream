import { IManagementClientConfig } from '../../config';
import { ContentTypeSnippetModels, ContentTypeSnippetElements } from '../../models';
import { ContentTypeSnippetResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';
export declare class AddContentTypeSnippetQuery extends BaseQuery<ContentTypeSnippetResponses.ViewContentTypeSnippetResponse> {
    protected config: IManagementClientConfig;
    protected queryService: ManagementQueryService;
    data: (builder: ContentTypeSnippetElements) => ContentTypeSnippetModels.IAddContentTypeSnippetData;
    constructor(config: IManagementClientConfig, queryService: ManagementQueryService, data: (builder: ContentTypeSnippetElements) => ContentTypeSnippetModels.IAddContentTypeSnippetData);
    toPromise(): Promise<ContentTypeSnippetResponses.ViewContentTypeSnippetResponse>;
    protected getAction(): string;
}
