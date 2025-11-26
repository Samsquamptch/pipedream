import { IManagementClientConfig } from '../../config';
import { Identifiers, ContentTypeModels } from '../../models';
import { ContentTypeSnippetResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';
export declare class ModifyContentTypeSnippetQuery extends BaseQuery<ContentTypeSnippetResponses.ModifyContentTypeSnippetResponse> {
    protected config: IManagementClientConfig;
    protected queryService: ManagementQueryService;
    identifier: Identifiers.ContentTypeIdentifier;
    data: ContentTypeModels.IModifyContentTypeData[];
    constructor(config: IManagementClientConfig, queryService: ManagementQueryService, identifier: Identifiers.ContentTypeIdentifier, data: ContentTypeModels.IModifyContentTypeData[]);
    toPromise(): Promise<ContentTypeSnippetResponses.ModifyContentTypeSnippetResponse>;
    protected getAction(): string;
}
