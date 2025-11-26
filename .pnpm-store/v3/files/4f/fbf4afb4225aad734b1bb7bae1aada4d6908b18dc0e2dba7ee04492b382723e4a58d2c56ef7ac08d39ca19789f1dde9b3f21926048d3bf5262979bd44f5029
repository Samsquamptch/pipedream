import { TaxonomyModels, SharedModels } from '../models';
import { TaxonomyResponses as TaxonomyResponses } from '../responses';
import { BaseMapper } from './base-mapper';
export class TaxonomyMapper extends BaseMapper {
    mapListingTaxonomysResponse(response) {
        let taxonomies;
        let pagination;
        // temporary mapping of taxonomies before API breaking change
        if (Array.isArray(response.data)) {
            taxonomies = response.data.map((m) => this.mapTaxonomy(m));
            pagination = new SharedModels.Pagination(null, null);
        }
        else {
            // new API response model
            taxonomies = response.data.taxonomies.map((m) => this.mapTaxonomy(m));
            pagination = super.mapPagination(response.data.pagination);
        }
        return new TaxonomyResponses.TaxonomyListResponse(super.mapResponseDebug(response), response.data, {
            pagination: pagination,
            items: taxonomies
        });
    }
    mapGetTaxonomyResponse(response) {
        const taxonomy = this.mapTaxonomy(response.data);
        return new TaxonomyResponses.GetTaxonomyResponse(super.mapResponseDebug(response), response.data, taxonomy);
    }
    mapModifyTaxonomyResponse(response) {
        const taxonomy = this.mapTaxonomy(response.data);
        return new TaxonomyResponses.ModifyTaxonomyResponse(super.mapResponseDebug(response), response.data, taxonomy);
    }
    mapAddTaxonomyResponse(response) {
        const taxonomy = this.mapTaxonomy(response.data);
        return new TaxonomyResponses.AddTaxonomyResponse(super.mapResponseDebug(response), response.data, taxonomy);
    }
    mapTaxonomy(rawTaxonomy) {
        return new TaxonomyModels.Taxonomy({
            codename: rawTaxonomy.codename,
            id: rawTaxonomy.id,
            lastModified: new Date(rawTaxonomy.last_modified),
            name: rawTaxonomy.name,
            terms: rawTaxonomy.terms.map((m) => this.mapTaxonomy(m)),
            externalId: rawTaxonomy.external_id,
            _raw: rawTaxonomy
        });
    }
}
export const taxonomyMappper = new TaxonomyMapper();
//# sourceMappingURL=taxonomy-mapper.js.map