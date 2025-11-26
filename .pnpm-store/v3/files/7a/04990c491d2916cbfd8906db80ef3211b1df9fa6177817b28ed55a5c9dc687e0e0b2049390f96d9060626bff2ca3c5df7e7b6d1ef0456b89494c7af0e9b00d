"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.taxonomyMappper = exports.TaxonomyMapper = void 0;
const models_1 = require("../models");
const responses_1 = require("../responses");
const base_mapper_1 = require("./base-mapper");
class TaxonomyMapper extends base_mapper_1.BaseMapper {
    mapListingTaxonomysResponse(response) {
        let taxonomies;
        let pagination;
        // temporary mapping of taxonomies before API breaking change
        if (Array.isArray(response.data)) {
            taxonomies = response.data.map((m) => this.mapTaxonomy(m));
            pagination = new models_1.SharedModels.Pagination(null, null);
        }
        else {
            // new API response model
            taxonomies = response.data.taxonomies.map((m) => this.mapTaxonomy(m));
            pagination = super.mapPagination(response.data.pagination);
        }
        return new responses_1.TaxonomyResponses.TaxonomyListResponse(super.mapResponseDebug(response), response.data, {
            pagination: pagination,
            items: taxonomies
        });
    }
    mapGetTaxonomyResponse(response) {
        const taxonomy = this.mapTaxonomy(response.data);
        return new responses_1.TaxonomyResponses.GetTaxonomyResponse(super.mapResponseDebug(response), response.data, taxonomy);
    }
    mapModifyTaxonomyResponse(response) {
        const taxonomy = this.mapTaxonomy(response.data);
        return new responses_1.TaxonomyResponses.ModifyTaxonomyResponse(super.mapResponseDebug(response), response.data, taxonomy);
    }
    mapAddTaxonomyResponse(response) {
        const taxonomy = this.mapTaxonomy(response.data);
        return new responses_1.TaxonomyResponses.AddTaxonomyResponse(super.mapResponseDebug(response), response.data, taxonomy);
    }
    mapTaxonomy(rawTaxonomy) {
        return new models_1.TaxonomyModels.Taxonomy({
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
exports.TaxonomyMapper = TaxonomyMapper;
exports.taxonomyMappper = new TaxonomyMapper();
//# sourceMappingURL=taxonomy-mapper.js.map