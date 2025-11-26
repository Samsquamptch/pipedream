import { IManagementClientConfig } from '../../config';
import { ContentTypeResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseListingQuery } from '../base-listing-query';
export declare class ListContentTypesQuery extends BaseListingQuery<ContentTypeResponses.ContentTypeListResponse, ContentTypeResponses.ContentTypeListAllResponse> {
    protected config: IManagementClientConfig;
    protected queryService: ManagementQueryService;
    constructor(config: IManagementClientConfig, queryService: ManagementQueryService);
    toPromise(): Promise<ContentTypeResponses.ContentTypeListResponse>;
    protected getAction(): string;
    protected allResponseFactory(items: any[], responses: ContentTypeResponses.ContentTypeListResponse[]): ContentTypeResponses.ContentTypeListAllResponse;
}
