import { SharedContracts } from './shared-contracts';
export declare namespace TaxonomyContracts {
    interface ITaxonomyContract {
        last_modified: string;
        name: string;
        id: string;
        codename: string;
        terms: ITaxonomyContract[];
        external_id?: string;
    }
    interface IListTaxonomyResponseContract {
        pagination: SharedContracts.IPaginationModelContract;
        taxonomies: ITaxonomyContract[];
    }
    interface IViewTaxonomyResponseContract extends ITaxonomyContract {
    }
    interface IAddTaxonomyResponseContract extends ITaxonomyContract {
    }
    interface IGetTaxonomyResponseContract extends ITaxonomyContract {
    }
    interface IModifyTaxonomyResponseContract extends ITaxonomyContract {
    }
    interface IDeleteTaxonomyResponseContract {
    }
}
