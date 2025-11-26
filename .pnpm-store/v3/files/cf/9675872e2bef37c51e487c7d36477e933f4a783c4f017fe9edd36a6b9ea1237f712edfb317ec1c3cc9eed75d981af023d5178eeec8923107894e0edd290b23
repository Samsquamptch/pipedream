import { IManagementClientConfig } from '../../config';
import { TaxonomyResponses } from '../../responses';
import { ManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';
import { Identifiers } from '../../models';
export declare class GetTaxonomyQuery extends BaseQuery<TaxonomyResponses.GetTaxonomyResponse> {
    protected config: IManagementClientConfig;
    protected queryService: ManagementQueryService;
    identifier: Identifiers.TaxonomyIdentifier;
    constructor(config: IManagementClientConfig, queryService: ManagementQueryService, identifier: Identifiers.TaxonomyIdentifier);
    toPromise(): Promise<TaxonomyResponses.GetTaxonomyResponse>;
    protected getAction(): string;
}
