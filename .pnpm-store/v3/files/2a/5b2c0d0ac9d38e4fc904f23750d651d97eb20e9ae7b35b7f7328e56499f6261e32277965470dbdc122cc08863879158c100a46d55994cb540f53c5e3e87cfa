import { IManagementClientConfig } from '../../config';
import { Identifiers } from '../../models';
import { ContentTypeResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';
export declare class ViewContentTypeQuery extends BaseQuery<ContentTypeResponses.ViewContentTypeResponse> {
    protected config: IManagementClientConfig;
    protected queryService: ManagementQueryService;
    identifier: Identifiers.ContentTypeIdentifier;
    constructor(config: IManagementClientConfig, queryService: ManagementQueryService, identifier: Identifiers.ContentTypeIdentifier);
    toPromise(): Promise<ContentTypeResponses.ViewContentTypeResponse>;
    protected getAction(): string;
}
