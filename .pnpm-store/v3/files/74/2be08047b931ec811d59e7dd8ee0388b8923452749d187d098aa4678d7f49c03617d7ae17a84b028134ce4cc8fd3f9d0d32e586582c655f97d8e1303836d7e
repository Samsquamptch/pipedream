import { IManagementClientConfig } from '../../config';
import { TaxonomyModels } from '../../models';
import { TaxonomyResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';
export declare class AddTaxonomyQuery extends BaseQuery<TaxonomyResponses.AddTaxonomyResponse> {
    protected config: IManagementClientConfig;
    protected queryService: ManagementQueryService;
    data: TaxonomyModels.IAddTaxonomyRequestModel;
    constructor(config: IManagementClientConfig, queryService: ManagementQueryService, data: TaxonomyModels.IAddTaxonomyRequestModel);
    toPromise(): Promise<TaxonomyResponses.AddTaxonomyResponse>;
    protected getAction(): string;
}
