import { IManagementClientConfig } from '../../config';
import { Identifiers, ContentTypeModels } from '../../models';
import { ContentTypeResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';
export declare class ModifyContentTypeQuery extends BaseQuery<ContentTypeResponses.ModifyContentTypeResponse> {
    protected config: IManagementClientConfig;
    protected queryService: ManagementQueryService;
    identifier: Identifiers.ContentTypeIdentifier;
    data: ContentTypeModels.IModifyContentTypeData[];
    constructor(config: IManagementClientConfig, queryService: ManagementQueryService, identifier: Identifiers.ContentTypeIdentifier, data: ContentTypeModels.IModifyContentTypeData[]);
    toPromise(): Promise<ContentTypeResponses.ModifyContentTypeResponse>;
    protected getAction(): string;
}
