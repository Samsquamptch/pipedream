import { IManagementClientConfig } from '../../config';
import { ContentItemResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseListingQuery } from '../base-listing-query';
export declare class ListContentItemsQuery extends BaseListingQuery<ContentItemResponses.ContentItemsResponse, ContentItemResponses.ContentItemsListAllResponse> {
    protected config: IManagementClientConfig;
    protected queryService: ManagementQueryService;
    constructor(config: IManagementClientConfig, queryService: ManagementQueryService);
    toPromise(): Promise<ContentItemResponses.ContentItemsResponse>;
    protected getAction(): string;
    protected allResponseFactory(items: any[], responses: ContentItemResponses.ContentItemsResponse[]): ContentItemResponses.ContentItemsListAllResponse;
}
