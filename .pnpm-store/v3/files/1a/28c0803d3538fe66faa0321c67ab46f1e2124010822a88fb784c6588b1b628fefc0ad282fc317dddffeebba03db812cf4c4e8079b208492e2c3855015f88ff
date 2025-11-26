import { PreviewResponses } from '../../responses';
import { IManagementClientConfig } from '../../config';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';
import { PreviewModels } from '../../models';
export declare class ModifyPreviewConfigurationQuery extends BaseQuery<PreviewResponses.ModifyConfigurationResponse> {
    protected config: IManagementClientConfig;
    protected queryService: ManagementQueryService;
    private data;
    constructor(config: IManagementClientConfig, queryService: ManagementQueryService, data: PreviewModels.IModifyPreviewConfigurationData);
    toPromise(): Promise<PreviewResponses.ModifyConfigurationResponse>;
    protected getAction(): string;
}
