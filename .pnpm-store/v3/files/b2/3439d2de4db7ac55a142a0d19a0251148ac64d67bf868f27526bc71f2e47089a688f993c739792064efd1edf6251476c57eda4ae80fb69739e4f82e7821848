import { IManagementClientConfig } from '../../config';
import { ContentItemContracts } from '../../contracts';
import { ContentItemResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';
export declare class AddContentItemQuery extends BaseQuery<ContentItemResponses.AddContentItemResponse> {
    protected config: IManagementClientConfig;
    protected queryService: ManagementQueryService;
    data: ContentItemContracts.IAddContentItemPostContract;
    constructor(config: IManagementClientConfig, queryService: ManagementQueryService, data: ContentItemContracts.IAddContentItemPostContract);
    toPromise(): Promise<ContentItemResponses.AddContentItemResponse>;
    protected getAction(): string;
}
export declare class AddContentItemQueryInit {
    protected config: IManagementClientConfig;
    protected queryService: ManagementQueryService;
    constructor(config: IManagementClientConfig, queryService: ManagementQueryService);
    withData(item: ContentItemContracts.IAddContentItemPostContract): AddContentItemQuery;
}
