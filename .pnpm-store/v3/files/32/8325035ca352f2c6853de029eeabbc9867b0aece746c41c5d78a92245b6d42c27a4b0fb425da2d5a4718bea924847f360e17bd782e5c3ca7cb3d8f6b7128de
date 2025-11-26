import { IManagementClientConfig } from '../../config';
import { AssetResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseListingQuery } from '../base-listing-query';
export declare class ListAssetsQuery extends BaseListingQuery<AssetResponses.AssetsListResponse, AssetResponses.AssetsListAllResponse> {
    protected config: IManagementClientConfig;
    protected queryService: ManagementQueryService;
    constructor(config: IManagementClientConfig, queryService: ManagementQueryService);
    toPromise(): Promise<AssetResponses.AssetsListResponse>;
    protected getAction(): string;
    protected allResponseFactory(items: any[], responses: AssetResponses.AssetsListResponse[]): AssetResponses.AssetsListAllResponse;
}
