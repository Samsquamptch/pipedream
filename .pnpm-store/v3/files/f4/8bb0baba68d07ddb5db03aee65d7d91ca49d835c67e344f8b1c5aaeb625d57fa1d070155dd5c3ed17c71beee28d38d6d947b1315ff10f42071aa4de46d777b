import { SharedModels } from '../shared/shared-models';
import { LanguageContracts } from '../../contracts';
export declare namespace LanguageModels {
    class LanguageModel implements SharedModels.IBaseModel<LanguageContracts.ILanguageModelContract> {
        name: string;
        id: string;
        codename: string;
        externalId?: string;
        isActive: boolean;
        isDefault: boolean;
        fallbackLanguage?: FallbackLanguageModel;
        _raw: LanguageContracts.ILanguageModelContract;
        constructor(data: {
            name: string;
            id: string;
            codename: string;
            externalId?: string;
            isActive: boolean;
            isDefault: boolean;
            fallbackLanguage?: FallbackLanguageModel;
            _raw: LanguageContracts.ILanguageModelContract;
        });
    }
    class FallbackLanguageModel {
        id: string;
        constructor(data: {
            id: string;
        });
    }
    type ModifyLanguageOperation = 'replace';
    interface IModifyLanguageData {
        op: ModifyLanguageOperation;
        property_name: 'name' | 'codename' | 'fallback_language' | 'is_active';
        value: string | boolean | SharedModels.IReferenceObject;
    }
    interface IAddLanguageData {
        name: string;
        codename: string;
        is_active?: boolean;
        fallback_language?: SharedModels.IReferenceObject;
        external_id?: string;
    }
}
