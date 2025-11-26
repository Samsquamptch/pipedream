import { IResponse } from '@kontent-ai/core-sdk';
import { TaxonomyContracts } from '../contracts';
import { TaxonomyModels } from '../models';
import { TaxonomyResponses as TaxonomyResponses } from '../responses';
import { BaseMapper } from './base-mapper';
export declare class TaxonomyMapper extends BaseMapper {
    mapListingTaxonomysResponse(response: IResponse<TaxonomyContracts.IListTaxonomyResponseContract>): TaxonomyResponses.TaxonomyListResponse;
    mapGetTaxonomyResponse(response: IResponse<TaxonomyContracts.IGetTaxonomyResponseContract>): TaxonomyResponses.GetTaxonomyResponse;
    mapModifyTaxonomyResponse(response: IResponse<TaxonomyContracts.IModifyTaxonomyResponseContract>): TaxonomyResponses.ModifyTaxonomyResponse;
    mapAddTaxonomyResponse(response: IResponse<TaxonomyContracts.IAddTaxonomyResponseContract>): TaxonomyResponses.AddTaxonomyResponse;
    mapTaxonomy(rawTaxonomy: TaxonomyContracts.ITaxonomyContract): TaxonomyModels.Taxonomy;
}
export declare const taxonomyMappper: TaxonomyMapper;
