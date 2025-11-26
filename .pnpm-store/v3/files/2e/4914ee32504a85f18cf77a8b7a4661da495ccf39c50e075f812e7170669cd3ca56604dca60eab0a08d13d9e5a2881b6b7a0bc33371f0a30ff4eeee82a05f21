import { IManagementClientConfig } from '../../config';
import { ContentItemContracts } from '../../contracts';
import { Identifiers } from '../../models';
import { ContentItemResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';
export declare class UpsertContentItemQuery extends BaseQuery<ContentItemResponses.UpsertContentItemResponse> {
    protected config: IManagementClientConfig;
    protected queryService: ManagementQueryService;
    data: ContentItemContracts.IUpsertContentItemPostContract;
    identifier: Identifiers.ContentItemIdentifier;
    constructor(config: IManagementClientConfig, queryService: ManagementQueryService, data: ContentItemContracts.IUpsertContentItemPostContract, identifier: Identifiers.ContentItemIdentifier);
    toPromise(): Promise<ContentItemResponses.UpsertContentItemResponse>;
    protected getAction(): string;
}
