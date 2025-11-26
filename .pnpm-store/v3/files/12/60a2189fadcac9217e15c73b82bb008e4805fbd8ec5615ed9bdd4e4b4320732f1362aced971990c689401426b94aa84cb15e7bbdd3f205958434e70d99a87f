import { IManagementClientConfig } from '../../config';
import { ContentTypeModels, ContentTypeElementsBuilder } from '../../models';
import { ContentTypeResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';
export declare class AddContentTypeQuery extends BaseQuery<ContentTypeResponses.AddContentTypeResponse> {
    protected config: IManagementClientConfig;
    protected queryService: ManagementQueryService;
    data: (builder: ContentTypeElementsBuilder) => ContentTypeModels.IAddContentTypeData;
    constructor(config: IManagementClientConfig, queryService: ManagementQueryService, data: (builder: ContentTypeElementsBuilder) => ContentTypeModels.IAddContentTypeData);
    toPromise(): Promise<ContentTypeResponses.AddContentTypeResponse>;
    protected getAction(): string;
}
