import { IManagementClientConfig } from '../../config';
import { CollectionModels } from '../../models';
import { CollectionResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';
export declare class SetCollectionsQuery extends BaseQuery<CollectionResponses.SetCollectionsResponse> {
    protected config: IManagementClientConfig;
    protected queryService: ManagementQueryService;
    data: CollectionModels.ISetCollectionData[];
    constructor(config: IManagementClientConfig, queryService: ManagementQueryService, data: CollectionModels.ISetCollectionData[]);
    toPromise(): Promise<CollectionResponses.SetCollectionsResponse>;
    protected getAction(): string;
}
