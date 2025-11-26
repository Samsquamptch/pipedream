import { IManagementClientConfig } from '../../config';
import { Identifiers, TaxonomyModels } from '../../models';
import { TaxonomyResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';
export declare class ModifyTaxonomyQuery extends BaseQuery<TaxonomyResponses.ModifyTaxonomyResponse> {
    protected config: IManagementClientConfig;
    protected queryService: ManagementQueryService;
    identifier: Identifiers.TaxonomyIdentifier;
    data: TaxonomyModels.IModifyTaxonomyData[];
    constructor(config: IManagementClientConfig, queryService: ManagementQueryService, identifier: Identifiers.TaxonomyIdentifier, data: TaxonomyModels.IModifyTaxonomyData[]);
    toPromise(): Promise<TaxonomyResponses.ModifyTaxonomyResponse>;
    protected getAction(): string;
}
