import { IManagementClientConfig } from '../../config';
import { CollectionResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';
export declare class ListCollectionsQuery extends BaseQuery<CollectionResponses.CollectionsListResponse> {
    protected config: IManagementClientConfig;
    protected queryService: ManagementQueryService;
    constructor(config: IManagementClientConfig, queryService: ManagementQueryService);
    toPromise(): Promise<CollectionResponses.CollectionsListResponse>;
    protected getAction(): string;
}
