import { IManagementClientConfig } from '../../config';
import { ContentItemContracts } from '../../contracts';
import { Identifiers } from '../../models';
import { ContentItemResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';
export declare class UpdateContentItemQuery extends BaseQuery<ContentItemResponses.UpdateContentItemResponse> {
    protected config: IManagementClientConfig;
    protected queryService: ManagementQueryService;
    data: ContentItemContracts.IUpdateContentItemPostContract;
    identifier: Identifiers.ContentItemIdentifier;
    constructor(config: IManagementClientConfig, queryService: ManagementQueryService, data: ContentItemContracts.IUpdateContentItemPostContract, identifier: Identifiers.ContentItemIdentifier);
    toPromise(): Promise<ContentItemResponses.UpdateContentItemResponse>;
    protected getAction(): string;
}
