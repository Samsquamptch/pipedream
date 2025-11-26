import { IManagementClientConfig } from '../../config';
import { Identifiers } from '../../models';
import { AssetResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';
export declare class ViewAssetsQuery extends BaseQuery<AssetResponses.ViewAssetResponse> {
    protected config: IManagementClientConfig;
    protected queryService: ManagementQueryService;
    identifier: Identifiers.AssetIdentifier;
    constructor(config: IManagementClientConfig, queryService: ManagementQueryService, identifier: Identifiers.AssetIdentifier);
    toPromise(): Promise<AssetResponses.ViewAssetResponse>;
    protected getAction(): string;
}
