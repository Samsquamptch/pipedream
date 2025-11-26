import { IManagementClientConfig } from '../../config';
import { Identifiers } from '../../models';
import { BaseResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';
export declare class DeleteContentItemQuery extends BaseQuery<BaseResponses.EmptyContentManagementResponse> {
    protected config: IManagementClientConfig;
    protected queryService: ManagementQueryService;
    identifier: Identifiers.ContentItemIdentifier;
    constructor(config: IManagementClientConfig, queryService: ManagementQueryService, identifier: Identifiers.ContentItemIdentifier);
    toPromise(): Promise<BaseResponses.EmptyContentManagementResponse>;
    protected getAction(): string;
}
