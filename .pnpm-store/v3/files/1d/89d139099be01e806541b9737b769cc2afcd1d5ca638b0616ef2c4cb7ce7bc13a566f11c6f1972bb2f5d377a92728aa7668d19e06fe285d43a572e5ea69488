import { IManagementClientConfig } from '../../config';
import { Identifiers } from '../../models';
import { AssetRenditionResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';
export declare class ViewAssetRenditionQuery extends BaseQuery<AssetRenditionResponses.ViewAssetRenditionResponse> {
    protected config: IManagementClientConfig;
    protected queryService: ManagementQueryService;
    assetIdentifier: Identifiers.AssetIdentifier;
    renditionIdentifier: Identifiers.RenditionIdentifier;
    constructor(config: IManagementClientConfig, queryService: ManagementQueryService, assetIdentifier: Identifiers.AssetIdentifier, renditionIdentifier: Identifiers.RenditionIdentifier);
    toPromise(): Promise<AssetRenditionResponses.ViewAssetRenditionResponse>;
    protected getAction(): string;
}
