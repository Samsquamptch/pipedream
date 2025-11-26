import { IManagementClientConfig } from '../../config';
import { LanguageModels } from '../../models';
import { LanguageResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';
export declare class AddLanguageQuery extends BaseQuery<LanguageResponses.AddLanguageResponse> {
    protected config: IManagementClientConfig;
    protected queryService: ManagementQueryService;
    data: LanguageModels.IAddLanguageData;
    constructor(config: IManagementClientConfig, queryService: ManagementQueryService, data: LanguageModels.IAddLanguageData);
    toPromise(): Promise<LanguageResponses.AddLanguageResponse>;
    protected getAction(): string;
}
