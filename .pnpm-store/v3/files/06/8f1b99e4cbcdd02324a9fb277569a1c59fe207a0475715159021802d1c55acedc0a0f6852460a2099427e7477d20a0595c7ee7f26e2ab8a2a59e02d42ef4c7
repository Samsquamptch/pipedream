import { SharedContracts } from './shared-contracts';
export declare namespace LanguageContracts {
    interface ILanguageModelContract {
        name: string;
        id: string;
        codename: string;
        external_id?: string;
        is_active: boolean;
        is_default: boolean;
        fallback_language?: IFallbackLanguageContract;
    }
    interface IFallbackLanguageContract {
        id: string;
    }
    interface IListLanguagesResponseContract {
        languages: ILanguageModelContract[];
        pagination: SharedContracts.IPaginationModelContract;
    }
    interface IViewLanguageResponseContract extends ILanguageModelContract {
    }
    interface IAddLanguageResponseContract extends ILanguageModelContract {
    }
    interface IModifyLanguageResponseContract extends ILanguageModelContract {
    }
}
