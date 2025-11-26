import { IManagementClientConfig } from '../../config';
import { ContentTypeSnippetResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseListingQuery } from '../base-listing-query';
export declare class ListContentTypeSnippetsQuery extends BaseListingQuery<ContentTypeSnippetResponses.ContentTypeSnippetListResponse, ContentTypeSnippetResponses.ContentTypeSnippetListAllResponse> {
    protected config: IManagementClientConfig;
    protected queryService: ManagementQueryService;
    constructor(config: IManagementClientConfig, queryService: ManagementQueryService);
    toPromise(): Promise<ContentTypeSnippetResponses.ContentTypeSnippetListResponse>;
    protected getAction(): string;
    protected allResponseFactory(items: any[], responses: ContentTypeSnippetResponses.ContentTypeSnippetListResponse[]): ContentTypeSnippetResponses.ContentTypeSnippetListAllResponse;
}
