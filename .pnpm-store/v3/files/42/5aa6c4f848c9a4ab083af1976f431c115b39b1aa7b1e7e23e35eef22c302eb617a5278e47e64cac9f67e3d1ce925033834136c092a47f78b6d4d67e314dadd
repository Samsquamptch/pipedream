import { IManagementClientConfig } from '../../config';
import { Identifiers } from '../../models';
import { ContentItemResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';
export declare class ViewContentItemQuery extends BaseQuery<ContentItemResponses.ViewContentItemResponse> {
    protected config: IManagementClientConfig;
    protected queryService: ManagementQueryService;
    identifier: Identifiers.ContentItemIdentifier;
    constructor(config: IManagementClientConfig, queryService: ManagementQueryService, identifier: Identifiers.ContentItemIdentifier);
    toPromise(): Promise<ContentItemResponses.ViewContentItemResponse>;
    protected getAction(): string;
}
