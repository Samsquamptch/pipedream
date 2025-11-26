import { TaxonomyContracts } from '../../contracts';
import { TaxonomyModels, SharedModels } from '../../models';
import { BaseResponses } from '../base-responses';
export declare namespace TaxonomyResponses {
    class TaxonomyListResponse extends BaseResponses.BaseContentManagementListResponse<TaxonomyContracts.IListTaxonomyResponseContract, TaxonomyModels.Taxonomy> {
        constructor(debug: BaseResponses.IContentManagementResponseDebug, rawData: TaxonomyContracts.IListTaxonomyResponseContract, data: {
            items: TaxonomyModels.Taxonomy[];
            pagination: SharedModels.Pagination;
        });
    }
    class ListAllTaxonomiesResponse extends BaseResponses.ContentManagementListAllResponse<TaxonomyListResponse, TaxonomyModels.Taxonomy> {
        constructor(data: {
            items: TaxonomyModels.Taxonomy[];
            responses: TaxonomyListResponse[];
        });
    }
    class GetTaxonomyResponse extends BaseResponses.BaseContentManagementResponse<TaxonomyContracts.IGetTaxonomyResponseContract, TaxonomyModels.Taxonomy> {
        constructor(debug: BaseResponses.IContentManagementResponseDebug, rawData: TaxonomyContracts.IGetTaxonomyResponseContract, data: TaxonomyModels.Taxonomy);
    }
    class AddTaxonomyResponse extends BaseResponses.BaseContentManagementResponse<TaxonomyContracts.IAddTaxonomyResponseContract, TaxonomyModels.Taxonomy> {
        constructor(debug: BaseResponses.IContentManagementResponseDebug, rawData: TaxonomyContracts.IAddTaxonomyResponseContract, data: TaxonomyModels.Taxonomy);
    }
    class ModifyTaxonomyResponse extends BaseResponses.BaseContentManagementResponse<TaxonomyContracts.IModifyTaxonomyResponseContract, TaxonomyModels.Taxonomy> {
        constructor(debug: BaseResponses.IContentManagementResponseDebug, rawData: TaxonomyContracts.IModifyTaxonomyResponseContract, data: TaxonomyModels.Taxonomy);
    }
}
