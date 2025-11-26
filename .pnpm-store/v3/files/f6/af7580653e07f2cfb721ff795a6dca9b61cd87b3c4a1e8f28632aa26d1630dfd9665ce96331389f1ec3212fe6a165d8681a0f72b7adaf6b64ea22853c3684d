import { LanguageContracts } from '../../contracts/language-contracts';
import { LanguageModels, SharedModels } from '../../models';
import { BaseResponses } from '../base-responses';
export declare namespace LanguageResponses {
    class ListLanguagesResponse extends BaseResponses.BaseContentManagementListResponse<LanguageContracts.IListLanguagesResponseContract, LanguageModels.LanguageModel> {
        constructor(debug: BaseResponses.IContentManagementResponseDebug, rawData: LanguageContracts.IListLanguagesResponseContract, data: {
            items: LanguageModels.LanguageModel[];
            pagination: SharedModels.Pagination;
        });
    }
    class ListAllLanguagesResponse extends BaseResponses.ContentManagementListAllResponse<ListLanguagesResponse, LanguageModels.LanguageModel> {
        constructor(data: {
            items: LanguageModels.LanguageModel[];
            responses: ListLanguagesResponse[];
        });
    }
    class ViewLanguageResponse extends BaseResponses.BaseContentManagementResponse<LanguageContracts.IViewLanguageResponseContract, LanguageModels.LanguageModel> {
        constructor(debug: BaseResponses.IContentManagementResponseDebug, rawData: LanguageContracts.IViewLanguageResponseContract, data: LanguageModels.LanguageModel);
    }
    class AddLanguageResponse extends BaseResponses.BaseContentManagementResponse<LanguageContracts.IAddLanguageResponseContract, LanguageModels.LanguageModel> {
        constructor(debug: BaseResponses.IContentManagementResponseDebug, rawData: LanguageContracts.IAddLanguageResponseContract, data: LanguageModels.LanguageModel);
    }
    class ModifyLanguageResponse extends BaseResponses.BaseContentManagementResponse<LanguageContracts.IModifyLanguageResponseContract, LanguageModels.LanguageModel> {
        constructor(debug: BaseResponses.IContentManagementResponseDebug, rawData: LanguageContracts.IModifyLanguageResponseContract, data: LanguageModels.LanguageModel);
    }
}
