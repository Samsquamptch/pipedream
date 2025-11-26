import { IManagementClientConfig } from '../../config';
import { Identifiers, LanguageModels } from '../../models';
import { LanguageResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';
export declare class ModifyLanguageQuery extends BaseQuery<LanguageResponses.ModifyLanguageResponse> {
    protected config: IManagementClientConfig;
    protected queryService: ManagementQueryService;
    identifier: Identifiers.LanguageIdentifier;
    data: LanguageModels.IModifyLanguageData[];
    constructor(config: IManagementClientConfig, queryService: ManagementQueryService, identifier: Identifiers.LanguageIdentifier, data: LanguageModels.IModifyLanguageData[]);
    toPromise(): Promise<LanguageResponses.ModifyLanguageResponse>;
    protected getAction(): string;
}
