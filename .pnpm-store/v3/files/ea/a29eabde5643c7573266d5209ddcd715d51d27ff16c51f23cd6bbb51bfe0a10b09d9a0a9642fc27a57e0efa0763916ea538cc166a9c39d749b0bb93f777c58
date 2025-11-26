import { Identifiers } from '../../models/identifiers';
import { IManagementClientConfig } from '../../config';
import { AssetRenditionResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseListingQuery } from '../base-listing-query';
export declare class ListAssetRenditionsQuery extends BaseListingQuery<AssetRenditionResponses.AssetRenditionsListResponse, AssetRenditionResponses.AssetRenditionsListAllResponse> {
    protected config: IManagementClientConfig;
    protected queryService: ManagementQueryService;
    identifier: Identifiers.AssetIdentifier;
    constructor(config: IManagementClientConfig, queryService: ManagementQueryService, identifier: Identifiers.AssetIdentifier);
    toPromise(): Promise<AssetRenditionResponses.AssetRenditionsListResponse>;
    protected getAction(): string;
    protected allResponseFactory(items: any[], responses: AssetRenditionResponses.AssetRenditionsListResponse[]): AssetRenditionResponses.AssetRenditionsListAllResponse;
}
